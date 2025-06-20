"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../lib/firebase";
export default function Dashboard() {
//     type ContactMessage = {
//   fullName: string;
//   email: string;
//   message: string;
//   createdAt?: any; // or Timestamp
// };
  const [messages, setMessages] = useState<DocumentData[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const snapshot = await getDocs(collection(db, "contacts"));
        const data = snapshot.docs.map((doc) => doc.data());
        setMessages(data);
      } else {
        setUser(null);
      }
    });
    return () => unsub();
  }, []);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  if (!user) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
        <p className="mb-4">Sign in to view contact messages</p>
        <button onClick={login} className="bg-black text-white px-4 py-2 rounded">Sign in with Google</button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg, idx) => (
            <li key={idx} className="border p-4 rounded bg-white shadow">
              <p><strong>Name:</strong> {msg.fullName}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
