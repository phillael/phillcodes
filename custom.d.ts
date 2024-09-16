import { ShaderMaterial } from 'three'
import { ReactThreeFiber } from '@react-three/fiber'

declare module '@react-three/fiber' {
  interface ThreeElements {
    shaderMaterial: ReactThreeFiber.Object3DNode<
      ShaderMaterial,
      typeof ShaderMaterial
    >
  }
}
