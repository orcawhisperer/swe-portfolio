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

      const light = new THREE.PointLight(0xffffff, 1, 100)
      light.position.set(0, 2, 100)
      scene.add(light)

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5) // Add ambient light
      scene.add(ambientLight)

      const renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setClearColor("#0A0F19")
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      container.appendChild(renderer.domElement)

      const cubeSize = 30
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)

      const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"]
      const materials = colors.map(
         (color) => new THREE.MeshPhongMaterial({ color })
      )

      const textMaterial = new THREE.MeshNormalMaterial({
         transparent: false,
      })

      const group = new THREE.Group()
      const textGroup = new THREE.Group()
      for (let i = 0; i < 750; i++) {
         const material =
            materials[Math.floor(Math.random() * materials.length)]
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

      const createTypo = (font) => {
         const name = "VASANTHAKUMAR"
         const title = "SOFTWARE ENGINEER | CLOUD ARCHITECT | TECH ENTHUSIAST"
         const typoProperties = {
            font: font,
            size: cubeSize * 8,
            height: cubeSize / 8,
            curveSegments: 24,
            bevelEnabled: true,
            bevelThickness: 20,
            bevelSize: 12,
            bevelOffset: 2,
            bevelSegments: 16,
         }

         // scene.add(textGroup)
         // For each character in the name, create a new TextGeometry and apply a different material
         let x = cubeSize * -20
         for (let i = 0; i < name.length; i++) {
            const char = name[i]
            const textGeo = new TextGeometry(char, typoProperties)
            const textMesh = new THREE.Mesh(
               textGeo,
               materials[i % materials.length]
            )
            textMesh.position.x = x
            textMesh.position.z = cubeSize
            x += cubeSize * 8 // Adjust x position for the next letter

            textGroup.add(textMesh)
         }

         const titleGeo = new TextGeometry(title, typoProperties)

         const titleMesh = new THREE.Mesh(titleGeo, textMaterial)
         titleMesh.position.x = cubeSize * -140
         titleMesh.position.z = cubeSize
         titleMesh.position.y = cubeSize * -20
         textGroup.add(titleMesh)

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
            camera.aspect = width / height // Change this line
            camera.updateProjectionMatrix()
            return camera
         })
         renderer.setSize(width, height) // And this one
      }

      document.addEventListener("mousemove", mouseFX.onMouseMove, false)
      document.addEventListener("touchmove", mouseFX.onTouchMove, false)
      window.addEventListener("resize", onWindowResize, false)

      setScene(scene)

      let frameId = null

      const animate = () => {
         frameId = requestAnimationFrame(animate)

         camera.position.x += (mouseX - camera.position.x) * 0.05
         camera.position.y += (-mouseY - camera.position.y) * 0.05
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
         cancelAnimationFrame(frameId)
         renderer.dispose()
         window.removeEventListener("resize", onWindowResize, false)
         container.removeChild(renderer.domElement) // remove the renderer's DOM element
      }
   }, [])

   return <div ref={containerRef} className="w-full h-full "></div>
}

export default Hero3
