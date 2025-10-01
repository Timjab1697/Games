// src/Backend/funciones.ts

// 1. Sumar
export function sumar(a: number, b: number): number {
  return a + b;
}

// 2. Saludar
export function saludar(nombre: string): string {
  return `Hola, ${nombre}! Bienvenido a GameZone 🚀`;
}

// 3. Restar
export function restar(a: number, b: number): number {
  return a - b;
}

// 4. Multiplicar
export function multiplicar(a: number, b: number): number {
  return a * b;
}

// 5. Dividir (con validación)
export function dividir(a: number, b: number): string {
  if (b === 0) {
    return "Error: No se puede dividir por 0";
  }
  return `El resultado de ${a} ÷ ${b} es ${a / b}`;
}

// 6. Número aleatorio
export function numeroAleatorio(): number {
  return Math.floor(Math.random() * 100); // Número entre 0 y 99
}
