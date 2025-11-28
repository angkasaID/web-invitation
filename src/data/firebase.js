// src/lib/firebase.js
// Menggunakan import compat yang benar untuk mendukung sintaks firebase.database()
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: 'AIzaSyCDZ3zzCfugHEqXH-6pTpSjmO3ZHiuQlpQ',
  authDomain: 'undangan-aethersub.firebaseapp.com',
  databaseURL: 'https://undangan-aethersub-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'undangan-aethersub'
}

// Inisialisasi Firebase hanya jika belum ada aplikasi yang diinisialisasi
if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig)
    console.log('Firebase initialized successfully via module script.')
  } catch (e) {
    console.error('Firebase Initialization Error:', e)
  }
}

// Ekspor instance database
const db = firebase.database()

export { db }
