"use client"

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { Button } from 'flowbite-react';
import { db } from '../firebase/config';
import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs, getDoc } from 'firebase/firestore';

function getDomain() {
  if (typeof window !== "undefined") {
    const email = localStorage.getItem('email');
    let parts = email.split("@");
    let query = parts[1];
    return query;
  }
}
function DocID() {
  if (typeof window !== "undefined") {
    const email = localStorage.getItem('email');
    let parts = email.split("@");
    let query = parts[0];
    return query;
  }
}

async function fetchDataFromFirestore() {



  const querySnapshot = await getDocs(collection(db, getDomain()))

  const docRef = doc(db, getDomain(), DocID());

  // const docSnap = await getDoc(docRef)

  return docRef
  // if(docSnap.exists()){
  //   const data = docSnap.data()

  //   return data;
  // }else{
  //   console.log('no data');
  // }
  // querySnapshot.forEach((doc) => {
  //   data.push({ id: doc.id, ...doc.data() });
  // });

}


export default function dashboard() {


  const [user] = useAuthState(auth);
  const router = useRouter()
  if (typeof window !== "undefined") {
    const userSession = localStorage.getItem('user');
    if (!user && !userSession) {
      router.push('/sign-in')
    }
  }

  console.log({ user })

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // const data = await fetchDataFromFirestore();

      // const querySnapshot = await getDocs(collection(db, getDomain()))

      const docRef = doc(db, getDomain(), DocID());

      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data = docSnap.data()

        setUserData(data);
      } else {
        console.log('no data');
      }
      
    }
    fetchData();
  }, []);


  return (
    <main>
      <Button onClick={() => {
        signOut(auth)
        localStorage.removeItem('user')
        localStorage.setItem('email', "example@example.com")
        router.push('/')
      }}>
        Log out
      </Button>
      <div>
        
          <div key={userData.id}>
            <p>{userData.name}</p>
            <p>{userData.age}</p>
            <p>{userData.primaryContact}</p>
            <p>{userData.secondaryContact}</p>
            <p>{userData.fatherName}</p>
            <p>{userData.motherName}</p>
            <p>{userData.email}</p>
            <p>{userData.familySamagra}</p>
            <p>{userData.samagra}</p>
            <p>{userData.aadhar}</p>
            <p>{userData.class}</p>
            <p>{userData.section}</p>
            <p>{userData.isStudent}</p>

          


          </div>
       
      </div>
    </main>
  );
}