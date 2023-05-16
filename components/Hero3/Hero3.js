import React, { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js"

const Hero3 = () => {
   const containerRef = useRef()
   const nearDistance = 1
   const farDistance = 10000

   const [scene, setScene] = useState(
      new THREE.Scene({ antialias: true, alpha: true })
   )

   const [camera, setCamera] = useState(
      new THREE.PerspectiveCamera(75, 1, nearDistance, farDistance)
   )

   useEffect(() => {
      const container = containerRef.current
      const width = container.clientWidth
      const height = container.clientHeight
      setCamera((camera) => {
         camera.aspect = width / height
         camera.updateProjectionMatrix()
         return camera
      })

      const renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setClearColor("#0A0F19")
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      container.appendChild(renderer.domElement)

      const cubeSize = 120
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)

      const textMaterial = new THREE.MeshNormalMaterial({
         transparent: false,
         opacity: 1,
      })

      const group = new THREE.Group()
      const textGroup = new THREE.Group()
      for (let i = 0; i < 250; i++) {
         const geometry = new THREE.BoxBufferGeometry(
            cubeSize,
            cubeSize,
            cubeSize
         )
         const numFaces = geometry.getAttribute("position").count / 6

         const colors = new Float32Array(numFaces * 6 * 3) // 6 vertices per face, 3 components per vertex

         for (let j = 0; j < numFaces; j++) {
            const color = new THREE.Color(Math.random() * 0x00ff00)
            for (let k = 0; k < 6; k++) {
               // 6 vertices per face
               colors[(j * 6 + k) * 3] = color.r
               colors[(j * 6 + k) * 3 + 1] = color.g
               colors[(j * 6 + k) * 3 + 2] = color.b
            }
         }

         geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
         const material = new THREE.MeshBasicMaterial({
            vertexColors: true,
            opacity: 0.5,
            transparent: true,
         })

         // const color = new THREE.Color(Math.random() * 0xffffff) // Generate a random color
         // const material = new THREE.MeshBasicMaterial({
         //    color: color, // Set the color
         //    transparent: true,
         // })

         const mesh = new THREE.Mesh(geometry, material)
         const dist = farDistance / 3
         const distDouble = dist * 2
         const tau = 2 * Math.PI

         mesh.position.x = Math.random() * distDouble - dist
         mesh.position.y = Math.random() * distDouble - dist
         mesh.position.z = Math.random() * distDouble - dist

         mesh.rotation.x = Math.random() * tau
         mesh.rotation.y = Math.random() * tau
         mesh.rotation.z = Math.random() * tau

         mesh.matrixAutoUpdate = false
         mesh.updateMatrix()

         group.add(mesh)
      }

      scene.add(group)

      const loader = new FontLoader()
      const nameTextMesh = new THREE.Mesh()
      const titleTextMesh = new THREE.Mesh()

      const createTypo = (font) => {
         const name = "VASANTHAKUMAR"
         const title = "Software Engineer | Cloud Architect | Tech Enthusiast"
         const typoProperties = {
            font: font,
            size: cubeSize * 2,
            height: cubeSize / 4,
            curveSegments: 24,
            bevelEnabled: true,
            bevelThickness: 20,
            bevelSize: 12,
            bevelOffset: 2,
            bevelSegments: 16,
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

      let mouseX = 0
      let mouseY = 0

      const mouseFX = {
         windowHalfX: width / 2,
         windowHalfY: height / 2,
         coordinates: function (coordX, coordY) {
            mouseX = (coordX - mouseFX.windowHalfX) * 10
            mouseY = (coordY - mouseFX.windowHalfY) * 10
         },
         onMouseMove: function (e) {
            mouseFX.coordinates(e.clientX, e.clientY)
         },
         onTouchMove: function (e) {
            mouseFX.coordinates(
               e.changedTouches[0].clientX,
               e.changedTouches[0].clientY
            )
         },
      }

      const onWindowResize = () => {
         const container = containerRef.current
         const width = container.clientWidth
         const height = container.clientHeight
         setCamera((camera) => {
            camera.aspect = window.innerWidth / height
            camera.updateProjectionMatrix()
            return camera
         })
         renderer.setSize(window.innerWidth, height)
      }

      document.addEventListener("mousemove", mouseFX.onMouseMove, false)
      document.addEventListener("touchmove", mouseFX.onTouchMove, false)
      window.addEventListener("resize", onWindowResize, false)

      const animate = () => {
         requestAnimationFrame(animate)

         camera.position.x += 1 * 0.05
         camera.position.y += -1 * 0.05
         camera.position.z = farDistance / 4

         camera.lookAt(scene.position)

         const t = Date.now() * 0.001
         const rx = Math.sin(t * 0.7) * 0.5
         const ry = Math.sin(t * 0.3) * 0.5
         const rz = Math.sin(t * 0.2) * 0.5

         group.rotation.x = rx
         group.rotation.y = ry
         group.rotation.z = rz

         renderer.render(scene, camera)
      }
      animate()

      return () => {
         document.removeEventListener("mousemove", mouseFX.onMouseMove)
         document.removeEventListener("touchmove", mouseFX.onTouchMove)
         window.removeEventListener("resize", onWindowResize, false)
         container.removeChild(renderer.domElement) // remove the renderer's DOM element
      }
   }, [])

   return <div ref={containerRef} className="w-full h-full "></div>
}

export default Hero3
