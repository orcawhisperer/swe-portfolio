import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass"

function Matrix3DWorld() {
   const canvasRef = useRef(null)

   useEffect(() => {
      // Three.js scene initialization
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
         75,
         window.innerWidth / window.innerHeight,
         0.1,
         1000
      )
      const renderer = new THREE.WebGLRenderer({ antialias: true })

      // Set up renderer size
      renderer.setSize(window.innerWidth, window.innerHeight)

      // Append renderer to the canvas element
      canvasRef.current.appendChild(renderer.domElement)

      // Generate matrix-like background
      const gridSize = 20 // Number of grid elements
      const gridSpacing = 1 // Spacing between grid elements
      const gridElements = []

      for (let x = -gridSize / 2; x < gridSize / 2; x++) {
         for (let y = -gridSize / 2; y < gridSize / 2; y++) {
            const geometry = new THREE.BoxGeometry(1, 1, 1) // Adjust the size of each grid element as needed
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }) // Adjust the material properties as needed

            const cube = new THREE.Mesh(geometry, material)
            cube.position.set(x * gridSpacing, y * gridSpacing, 0)

            scene.add(cube)
            gridElements.push(cube)
         }
      }

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5) // Adjust the ambient light color and intensity as needed
      scene.add(ambientLight)

      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1) // Adjust the directional light color and intensity as needed
      directionalLight.position.set(1, 1, 1) // Adjust the directional light position as needed
      scene.add(directionalLight)

      // Enable shadows
      renderer.shadowMap.enabled = true

      // Configure directional light for shadows
      directionalLight.castShadow = true
      directionalLight.shadow.mapSize.width = 1024 // Adjust the shadow map size as needed
      directionalLight.shadow.mapSize.height = 1024 // Adjust the shadow map size as needed
      directionalLight.shadow.camera.near = 0.5 // Adjust the shadow camera near value as needed
      directionalLight.shadow.camera.far = 500 // Adjust the shadow camera far value as needed

      // Configure shadow properties for grid elements
      gridElements.forEach((element) => {
         element.castShadow = true
         element.receiveShadow = true
      })

      // Add OrbitControls for interactivity
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true // Enable smooth camera movement
      controls.dampingFactor = 0.05 // Adjust the damping factor as needed
      controls.rotateSpeed = 0.5 // Adjust the rotation speed as needed
      controls.zoomSpeed = 1.2 // Adjust the zoom speed as needed

      controls.minDistance = 1 // Adjust the minimum zoom distance as needed
      controls.maxDistance = 100 // Adjust the maximum zoom distance as needed

      // Add post-processing effects
      const composer = new EffectComposer(renderer)
      composer.addPass(new RenderPass(scene, camera))

      // Add bloom effect
      const bloomPass = new UnrealBloomPass(
         new THREE.Vector2(window.innerWidth, window.innerHeight),
         1.5,
         0.4,
         0.85
      )
      composer.addPass(bloomPass)

      // Optimize performance
      const clock = new THREE.Clock()
      const lod = new THREE.LOD()

      // Generate multiple levels of detail
      //   for (let i = 0; i < 4; i++) {
      //      const lodLevel = new THREE.LODLevel()
      //      const distance = i === 0 ? 0 : 50 * Math.pow(2, i - 1) // Adjust the distance threshold for each level as needed

      //      gridElements.forEach((element) => {
      //         const clonedElement = element.clone()
      //         clonedElement.position.copy(element.position)
      //         clonedElement.scale.copy(element.scale)

      //         lodLevel.addLevel(clonedElement, distance)
      //      })

      //      lod.addLevel(lodLevel)
      //   }
      // Generate multiple levels of detail
      for (let i = 0; i < 4; i++) {
         const lodLevel = new THREE.Group() // Use THREE.Group instead of LODLevel
         const distance = i === 0 ? 0 : 50 * Math.pow(2, i - 1) // Adjust the distance threshold for each level as needed

         gridElements.forEach((element) => {
            const clonedElement = element.clone()
            clonedElement.position.copy(element.position)
            clonedElement.scale.copy(element.scale)

            lodLevel.add(clonedElement) // Use add() instead of addLevel()
         })

         lod.addLevel(lodLevel, distance)
      }

      lod.position.set(0, 0, 0) // Adjust the position of the LOD element as needed
      scene.add(lod)

      // Start rendering loop
      const animate = () => {
         requestAnimationFrame(animate)

         // Rotate the grid elements
         gridElements.forEach((element) => {
            element.rotation.x += 0.01
            element.rotation.y += 0.01
         })

         // Update the controls
         controls.update()

         // Update LOD based on camera distance
         const delta = clock.getDelta()
         lod.update(camera, delta)

         // Render the scene with post-processing
         composer.render()
      }
      animate()
   }, [])

   return (
      <div
         ref={canvasRef}
         style={{
            width: "100%",
            height: "100%",
         }}
      />
   )
}

export default Matrix3DWorld
