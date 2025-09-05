'use client';

import { useEffect, useState } from "react";
import { databases } from "@/lib/appwrite";

export default function DatabaseComponent() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDocs() {
      try {
        const res = await databases.listDocuments("68bb166300272a01faab", "facilities");
        setDocs(res.documents);
      } catch (err) {
        console.error("Error fetching documents:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDocs();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Documents</h2>
      <ul>
        {docs.map((doc) => (
          <li key={doc.$id}>{doc.facilities}</li>
        ))}
      </ul>
      <div>
        Total Documents: {docs.length}
      </div>
    </div>
  );
}
