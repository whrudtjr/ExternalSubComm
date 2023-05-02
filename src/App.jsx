/*eslint no-undef: "warn"*/
// ?컴파일 no-undef 에러 해결 필요
// import { useEffect, useState } from 'react'
import './App.css'
import Layouts from './components/layouts.jsx'

import { collection, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import { BrowserRouter } from 'react-router-dom';

import { db, auth } from './firebase'

function App() {

  // // !firestore 연동 테스트
  // const createDbtest = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "subtitles"), {
  //       srt: [
  //         {
  //           "start": 10.28,
  //           "end": 11.5,
  //           "text": "PO: Master Shifu?"
  //         },
  //         {
  //           "start": 13.4,
  //           "end": 14.86,
  //           "text": "Good time? Bad time?"
  //         },
  //         {
  //           "start": 15.52,
  //           "end": 17.8,
  //           "text": "SHIFU: Time is an illusion,"
  //         },
  //         {
  //           "start": 18,
  //           "end": 20.96,
  //           "text": "there is only the now."
  //         },
  //         {
  //           "start": 20.96,
  //           "end": 23.4,
  //           "text": "PO: So now's a... good time?"
  //         },
  //         {
  //           "start": 23.4,
  //           "end": 24.16,
  //           "text": "SHIFU: Oh..."
  //         },
  //         {
  //           "start": 25.64,
  //           "end": 29.52,
  //           "text": "SHIFU: You must take the next step on\nyour journey from warrior to teacher"
  //         },
  //         {
  //           "start": 29.6,
  //           "end": 30.52,
  //           "text": "PO: But I'm no good at it"
  //         },
  //         {
  //           "start": 30.7,
  //           "end": 33.72,
  //           "text": "PO: Oh no! It's the dragon teacher! He's so handsome!"
  //         },
  //         {
  //           "start": 33.72,
  //           "end": 35.199,
  //           "text": "WA-TAIIII!"
  //         },
  //         {
  //           "start": 37.94,
  //           "end": 38.8,
  //           "text": "MR. PING: Po?"
  //         },
  //         {
  //           "start": 38.8,
  //           "end": 41.099,
  //           "text": "PO: Oh heyy, Dad. What's up?"
  //         },
  //         {
  //           "start": 41.42,
  //           "end": 42.38,
  //           "text": "SHIFU: You're terrible at it."
  //         },
  //         {
  //           "start": 43.62,
  //           "end": 45.099,
  //           "text": "PO: Who... are you?"
  //         },
  //         {
  //           "start": 45.52,
  //           "end": 47.42,
  //           "text": "LI: I'm looking for my son"
  //         },
  //         {
  //           "start": 48.76,
  //           "end": 49.339,
  //           "text": "PO: Dad?"
  //         },
  //         {
  //           "start": 49.44,
  //           "end": 50.68,
  //           "text": "LI: Give your old man a hug!"
  //         },
  //         {
  //           "start": 53.96,
  //           "end": 56,
  //           "text": "MR. PING: How do we know he's even related to you?"
  //         },
  //         {
  //           "start": 56.02,
  //           "end": 57.14,
  //           "text": "LI: Look at that!"
  //         },
  //         {
  //           "start": 61.44,
  //           "end": 62.559,
  //           "text": "LI: Come with me."
  //         },
  //         {
  //           "start": 62.56,
  //           "end": 65.68,
  //           "text": "There's a secret panda village in the mountains."
  //         },
  //         {
  //           "start": 67.08,
  //           "end": 67.88,
  //           "text": "PO: Whoa..."
  //         },
  //         {
  //           "start": 67.94,
  //           "end": 69.46,
  //           "text": "LI: Welcome home, son"
  //         },
  //         {
  //           "start": 70.2,
  //           "end": 72.76,
  //           "text": "PO: You look just like me, but a baby."
  //         },
  //         {
  //           "start": 72.76,
  //           "end": 74.36,
  //           "text": "You're like me but old"
  //         },
  //         {
  //           "start": 74.52,
  //           "end": 76.22,
  //           "text": "GRANDMA PANDA: Ohh... He's adorable!"
  //         },
  //         {
  //           "start": 77.6,
  //           "end": 78.3,
  //           "text": "Ow!"
  //         },
  //         {
  //           "start": 79.7,
  //           "end": 80.76,
  //           "text": "I'm good!"
  //         },
  //         {
  //           "start": 82.54,
  //           "end": 84.54,
  //           "text": "KAI: Kai has returned!"
  //         },
  //         {
  //           "start": 84.9,
  //           "end": 85.4,
  //           "text": "Who?"
  //         },
  //         {
  //           "start": 85.54,
  //           "end": 87.6,
  //           "text": "KAI: The Master of Pain. Beast of Vengeance."
  //         },
  //         {
  //           "start": 87.6,
  //           "end": 88.759,
  //           "text": "Maker of Widows..."
  //         },
  //         {
  //           "start": 88.76,
  //           "end": 89.26,
  //           "text": "Eh?"
  //         },
  //         {
  //           "start": 89.26,
  //           "end": 91.04,
  //           "text": "KAI: Okay, I used to work with Oogway..."
  //         },
  //         {
  //           "start": 91.04,
  //           "end": 92.78,
  //           "text": "Oh! Master Oogway!"
  //         },
  //         {
  //           "start": 92.8,
  //           "end": 94,
  //           "text": "KAI: Silence!"
  //         },
  //         {
  //           "start": 94,
  //           "end": 96.16,
  //           "text": "TIGRESS: Kai attacked the valley."
  //         },
  //         {
  //           "start": 96.16,
  //           "end": 97.08,
  //           "text": "It's all gone."
  //         },
  //         {
  //           "start": 97.44,
  //           "end": 99.2,
  //           "text": "Now he's coming for the pandas."
  //         },
  //         {
  //           "start": 99.64,
  //           "end": 101.72,
  //           "text": "You must teach them to fight."
  //         },
  //         {
  //           "start": 102.32,
  //           "end": 103.839,
  //           "text": "PO: I am ready."
  //         },
  //         {
  //           "start": 104.72,
  //           "end": 106.46,
  //           "text": "I'm gonna turn you into kung fu masters"
  //         },
  //         {
  //           "start": 106.74,
  //           "end": 107.52,
  //           "text": "HAI!"
  //         },
  //         {
  //           "start": 111.48,
  //           "end": 113.36,
  //           "text": "Nobody said this was gonna be easy."
  //         },
  //         {
  //           "start": 113.8,
  //           "end": 115.02,
  //           "text": "MEI MEI: Get ready to dance..."
  //         },
  //         {
  //           "start": 115.12,
  //           "end": 116.36,
  //           "text": "...with danger!"
  //         },
  //         {
  //           "start": 118.36,
  //           "end": 119.96,
  //           "text": "PO: Enemies of justice. Prepare for..."
  //         },
  //         {
  //           "start": 119.96,
  //           "end": 122.08,
  //           "text": "Whoa! Are you kidding me?"
  //         },
  //         {
  //           "start": 122.44,
  //           "end": 124.64,
  //           "text": "Whoa! Ah! Ow!"
  //         },
  //         {
  //           "start": 125.8,
  //           "end": 128,
  //           "text": "KAI: You must be the dragon warrior."
  //         },
  //         {
  //           "start": 128,
  //           "end": 130.12,
  //           "text": "PO: How bout you spare me the chit chat?"
  //         },
  //         {
  //           "start": 130.12,
  //           "end": 131.12,
  //           "text": "KAI: I'm going to take your..."
  //         },
  //         {
  //           "start": 131.12,
  //           "end": 132.38,
  //           "text": "PO: Ugh. Chit chat!"
  //         },
  //         {
  //           "start": 132.38,
  //           "end": 132.88,
  //           "text": "KAI: In the-"
  //         },
  //         {
  //           "start": 132.88,
  //           "end": 133.82,
  //           "text": "PO: Chitt chitty chat chat."
  //         },
  //         {
  //           "start": 133.88,
  //           "end": 134.38,
  //           "text": "KAI: In..."
  //         },
  //         {
  //           "start": 134.46,
  //           "end": 135.42,
  //           "text": "PO: Chat chat chat."
  //         },
  //         {
  //           "start": 136.06,
  //           "end": 136.56,
  //           "text": "KAI: In the-"
  //         },
  //         {
  //           "start": 136.66,
  //           "end": 137.16,
  //           "text": "PO: Chit chat."
  //         },
  //         {
  //           "start": 137.92,
  //           "end": 139.2,
  //           "text": "PO: Yee haw!"
  //         },
  //         {
  //           "start": 140.32,
  //           "end": 141.38,
  //           "text": "MANTIS: Got to get in there."
  //         },
  //         {
  //           "start": 141.4,
  //           "end": 141.96,
  //           "text": "CRANE: But Master Shifu said..."
  //         },
  //         {
  //           "start": 142.02,
  //           "end": 143.26,
  //           "text": "MANTIS: You're seriously afraid?"
  //         },
  //         {
  //           "start": 143.34,
  //           "end": 146.06,
  //           "text": "Even Master Chicken's going in there, and he's a chicken."
  //         },
  //         {
  //           "start": 146.2,
  //           "end": 147.7,
  //           "text": "MASTER CHICKEN: Bock-bock bocka!"
  //         }
  //       ],
  //       src: "fGPPfZIvtCw",
  //       usr: 'test@mail.com'
  //     });
  //     console.log("Document written with ID: ", docRef);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }
  // const readDbtest = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "subtitles"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //   } catch (e) {
  //     console.error("Error", e);
  //   }
  // }
  // const readDoctest = async () => {
  //   const docRef = doc(db, "subtitles", "iJAzPXicPUS8TDtin6Wx");
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data().srt);
  //     return docSnap.data().srt
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }

  // // !firebase Auth 연동 테스트
  // const authtest = () => {
  //   createUserWithEmailAndPassword(auth, 'test@mail.com', 'password')
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
  // }
  // const logintest = () => {
  //   signInWithEmailAndPassword(auth, 'test@mail.com', 'password')
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // }
  // const signouttest = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Signed out
  //     })
  //     .catch((error) => {

  //     })
  // }
  // // !firebase Auth 로그인 상태 핸들러
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     // const uid = user.uid;
  //     console.log('logged', user)
  //     // ...
  //   } else {
  //     console.log('logout');
  //     // User is signed out
  //     // ...
  //   }
  // });

  // // !유튜브 iframe 중복 방지 임베딩
  // // ?YoutubeExternalSubtitle가 iframe 요소를 찾을 수 있도록 appendChild 이후 비동기 실행
  // let youtubeFrame = document.querySelector('iframe')
  // if (!youtubeFrame) {
  //   const iframe = document.createElement('iframe');
  //   iframe.width = '640';
  //   iframe.height = '360';
  //   iframe.src = 'https://www.youtube.com/embed/fGPPfZIvtCw';
  //   iframe.allowFullscreen = 'true';
  //   document.body.appendChild(iframe)

  //   // !자막 선언
  //   let subtitle = []
  
  //   // ?firestore에서 비동기 쿼리해서 자막 변수에 저장
  //   const setSrt = async () => {
  //     const docRef = doc(db, "subtitles", "iJAzPXicPUS8TDtin6Wx");
  //     const docSnap = await getDoc(docRef);
  
  //     if (docSnap.exists()) {
  //       console.log("Document data:", docSnap.data().srt);
  //       subtitle = docSnap.data().srt
  //     } else {
  //       // docSnap.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   }
  
  //   // 비동기 완료 후 YoutubeExternalSubtitle 생성자 적용
  //   setSrt().then(() => {
  //     console.log(subtitle)
  //     const exSubtitle = new YoutubeExternalSubtitle.Subtitle(iframe, subtitle);
  //   })
  // }

  return (
    <>
    <BrowserRouter>
    <Layouts></Layouts>
    </BrowserRouter>
    </>
  )
}

export default App