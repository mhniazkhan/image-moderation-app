import React, { useState } from "react";

export default function AICheckApp() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setAnalysis(null);
    }
  };

  const handleCheck = async () => {
    if (!image) return;
    setLoading(true);
    setTimeout(() => {
      setAnalysis({
        status: "warning",
        issues: [
          "Contains partial nudity (suggest blurring)",
          "Caption includes hate-related term (‘xxx’) — replace or remove"
        ],
        suggestion: "Blur the middle part and rephrase text to avoid hate speech."
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">🛡️ AI Image Content Checker</h1>
      <div className="max-w-xl mx-auto bg-white shadow p-6 rounded-xl">
        {preview ? (
          <img src={preview} alt="Preview" className="rounded-lg border mb-4" />
        ) : (
          <div className="border-dashed border-2 p-6 rounded-lg text-gray-500 mb-4">
            Upload an image to check content
          </div>
        )}
        <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
        <button
          onClick={handleCheck}
          disabled={!image || loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Check Content"}
        </button>
        {analysis && (
          <div className={`mt-4 p-4 rounded ${analysis.status === "ok" ? "bg-green-100" : "bg-yellow-100"}`}>
            <h2 className="font-bold mb-2">{analysis.status === "ok" ? "✅ Safe to Publish" : "⚠️ Review Required"}</h2>
            <ul className="text-left list-disc list-inside mb-2">
              {analysis.issues.map((issue, idx) => <li key={idx}>{issue}</li>)}
            </ul>
            <p><strong>Suggestion:</strong> {analysis.suggestion}</p>
          </div>
        )}
      </div>
    </div>
  );
}