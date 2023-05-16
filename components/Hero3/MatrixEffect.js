import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"

const Matrix = () => {
   const canvasRef = useRef()
   const containerRef = useRef()
   let renderer, animate

   useEffect(() => {
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({
         canvas: canvasRef.current,
      })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      // vertex shader
      const vertexShader = `
         attribute float size;
         attribute vec3 customColor;
         varying vec3 vColor;
         void main() {
           vColor = customColor;
           vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
           gl_PointSize = size * (300.0 / -mvPosition.z);
           gl_Position = projectionMatrix * mvPosition;
         }
       `

      // fragment shader
      const fragmentShader = `
         uniform sampler2D u_texture;
         varying vec3 vColor;
         void main() {
            gl_FragColor = vec4(vColor, 1.0);
            gl_FragColor = gl_FragColor * texture2D(u_texture, gl_PointCoord);
         }
       `

      // Shaders:
      //       const vertexShader = `
      // uniform float uTime;
      // uniform float uMouse;
      // uniform vec2 uMeshSizes;

      // varying vec2 vUv;
      // varying vec3 vPosition;
      // varying vec2 vMeshSizes;

      // float PI = 3.14159265359;

      // void main(){
      //   vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

      //   vUv = uv;
      //   vPosition = position;
      //   vMeshSizes = uMeshSizes;

      //   gl_Position = projectionMatrix * mvPosition;
      // }
      // `

      //       const fragmentShader = `
      // uniform float uTime;
      // uniform sampler2D uTexture;
      // uniform vec2 uResolution;

      // varying vec2 vUv;
      // varying vec2 vMeshSizes;
      // varying vec3 vPosition;

      // vec3 rain() {
      //   float x = vUv.x * vMeshSizes.x - mod(vUv.x * vMeshSizes.x, vMeshSizes.x / 24.0);

      //   float offset = sin(x * 15.0);
      //   float speed = cos(x * 3.0) * 0.3 + 0.7;

      //   float y = fract(vPosition.y / uResolution.y + uTime * 0.5 * speed + offset);

      //   return vec3(0.1, 1.0, 0.35) / (y * 15.0);
      // }

      // void main () {
      //   vec4 uv = texture2D(uTexture, vUv);

      //   vec3 color = vec3(uv.rgb * rain());

      //   gl_FragColor = vec4(color, 1.0);
      // }
      // `

      // uniform to hold the texture
      const uniforms = {
         u_texture: {
            value: new THREE.TextureLoader().load("/images/matix.png"),
         },
      }

      // const shaderMaterial = new THREE.ShaderMaterial({
      //    uniforms: {
      //       uTime: { value: 0 },
      //       uMouse: { value: 0 },
      //       uMeshSizes: { value: new THREE.Vector2(1, 1) },
      //       uTexture: {
      //          value: new THREE.TextureLoader().load("/images/matix.png"),
      //       },
      //       uResolution: {
      //          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      //       },
      //    },
      //    vertexShader: vertexShader,
      //    fragmentShader: fragmentShader,
      // })

      const shaderMaterial = new THREE.ShaderMaterial({
         uniforms: uniforms,
         vertexShader: vertexShader,
         fragmentShader: fragmentShader,
         blending: THREE.AdditiveBlending,
         depthTest: false,
         transparent: true,
         vertexColors: true,
      })

      // Create particles
      const radius = 5000
      const geometry = new THREE.BufferGeometry()
      const positions = []
      const colors = []
      const sizes = []
      const color = new THREE.Color()
      const speeds = []

      for (let i = 0; i < 50000; i++) {
         positions.push((Math.random() * 2 - 1) * radius)
         positions.push((Math.random() * 2 - 1) * radius)
         positions.push((Math.random() * 2 - 1) * radius)

         color.setHSL(i / 100000, 1.0, 0.5)

         colors.push(color.r, color.g, color.b)
         sizes.push(10 * Math.random())
         speeds.push(0.1 + Math.random())
      }

      geometry.setAttribute(
         "position",
         new THREE.Float32BufferAttribute(positions, 3)
      )
      geometry.setAttribute(
         "customColor",
         new THREE.Float32BufferAttribute(colors, 3)
      )
      geometry.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1))

      // particle system
      const particleSystem = new THREE.Points(geometry, shaderMaterial)
      scene.add(particleSystem)

      camera.position.z = 1000

      const loader = new FontLoader()
      const nameTextMesh = new THREE.Mesh()
      const titleTextMesh = new THREE.Mesh()
      const cubeSize = 120
      const textMaterial = new THREE.MeshNormalMaterial({
         transparent: false,
         opacity: 1,
      })

      const textGroup = new THREE.Group()

      const createTypo = (font) => {
         const name = "VASANTHAKUMAR"
         const title = "Software Engineer | Cloud Architect | Tech Enthusiast"
         const typoProperties = {
            font: font,
            size: cubeSize,
            height: cubeSize / 2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 6,
            bevelOffset: 1,
            bevelSegments: 8,
         }

         const text = new TextGeometry(name, typoProperties)
         const titleText = new TextGeometry(title, typoProperties)
         nameTextMesh.geometry = text
         nameTextMesh.material = textMaterial
         nameTextMesh.position.x = cubeSize * -10
         nameTextMesh.position.z = cubeSize * 5

         titleTextMesh.geometry = titleText
         titleTextMesh.material = textMaterial
         titleTextMesh.position.x = cubeSize * -35
         titleTextMesh.position.z = cubeSize * 5
         titleTextMesh.position.y = cubeSize * -5

         textGroup.add(nameTextMesh)
         textGroup.add(titleTextMesh)

         scene.add(textGroup)
      }

      loader.load(
         "https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json",
         createTypo
      )

      animate = function () {
         requestAnimationFrame(animate)

         particleSystem.geometry.attributes.position.needsUpdate = true
         for (
            let i = 0;
            i < particleSystem.geometry.attributes.position.count;
            i++
         ) {
            const yPos = particleSystem.geometry.attributes.position.getY(i)
            particleSystem.geometry.attributes.position.setY(
               i,
               yPos - speeds[i]
            )
            if (yPos < -height / 2) {
               particleSystem.geometry.attributes.position.setY(
                  i,
                  (height / 2) * Math.random()
               )
            }
         }

         renderer.render(scene, camera)
      }

      animate()

      // Clean up on unmount
      return () => {
         cancelAnimationFrame(animate)
         renderer.dispose()
      }
   }, [renderer])

   return (
      <div className="w-full h-full" ref={containerRef}>
         <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
   )
}
export default Matrix
