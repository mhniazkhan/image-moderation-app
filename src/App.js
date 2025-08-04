import React, { useState } from "react";

export default function BengaliImageReport() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  // ছবি আপলোড হ্যান্ডলার
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setReport(null);
    }
  };

  // ছবি বিশ্লেষণ (ডেমো জন্য কৃত্রিম রিপোর্ট)
  const analyzeImage = () => {
    if (!image) return;
    setLoading(true);

    // AI বা API থেকে আসা রিপোর্টের পরিবর্তে ডেমো ডাটা
    setTimeout(() => {
      setReport({
        issues: [
          "আংশিক নগ্নতা (Partial Nudity) আছে",
          "ক্যাপশনে হিংসাত্মক শব্দ ব্যবহৃত হয়েছে",
          "ছবির কিছু অংশ অস্পষ্ট বা ব্লার করা প্রয়োজন"
        ],
        details: [
          {
            problem: "আংশিক নগ্নতা",
            part: "ছবির মাঝখানে",
            cause: "ফেসবুক কমিউনিটি স্ট্যান্ডার্ড লঙ্ঘন",
            effect: "পোস্ট সাসপেন্ড হতে পারে"
          },
          {
            problem: "হিংস্র শব্দ",
            part: "ক্যাপশন",
            cause: "দর্শকদের জন্য অপ্রীতিকর",
            effect: "নেতিবাচক প্রতিক্রিয়া"
          },
          {
            problem: "অস্পষ্টতা",
            part: "ছবির বাঁ দিকে",
            cause: "বিষয়বস্তুর স্পষ্টতা কমানো",
            effect: "দর্শক বিভ্রান্ত হতে পারে"
          }
        ],
        solutions: [
          "নগ্ন অংশ ব্লার করুন অথবা কেটে দিন",
          "ক্যাপশন থেকে হিংস্র শব্দ বাদ দিন অথবা পরিবর্তন করুন",
          "ছবি স্পষ্ট করার জন্য উন্নত রেজোলিউশনের ছবি ব্যবহার করুন"
        ],
        checklist: [
          "ছবি ফেসবুক কমিউনিটি গাইডলাইন মেনে চলেছে",
          "ক্যাপশন ঝুঁকিমুক্ত ও শ্রুতিমধুর",
          "ছবি স্পষ্ট ও পরিষ্কার"
        ],
        nextSteps: [
          "সংশোধিত ছবি ও ক্যাপশন পুনরায় আপলোড করুন",
          "প্রয়োজনে আবার চেক করুন",
          "নিয়মিত সতর্কতা অবলম্বন করুন"
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">🛡️ ছবি বিশ্লেষণ ও রিপোর্ট (বাংলায়)</h1>

      <div className="max-w-xl mx-auto bg-white shadow p-6 rounded-xl">
        {preview ? (
          <img
            src={preview}
            alt="আপলোড করা ছবি"
            className="rounded-lg border mb-4 max-h-60 mx-auto"
          />
        ) : (
          <div className="border-dashed border-2 p-12 rounded-lg text-gray-500 mb-4">
            ছবি আপলোড করুন
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4"
        />

        <button
          onClick={analyzeImage}
          disabled={!image || loading}
          className="bg-blue-600 text-white px-5 py-2 rounded disabled:opacity-50"
        >
          {loading ? "বিশ্লেষণ চলছে..." : "ছবি বিশ্লেষণ করুন"}
        </button>

        {report && (
          <div className="mt-6 text-left">
            <h2 className="text-2xl font-semibold mb-3">📋 ছবির সমস্যা:</h2>
            <ul className="list-disc list-inside mb-4">
              {report.issues.map((issue, i) => (
                <li key={i}>{issue}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">🔍 সমস্যার বিস্তারিত:</h3>
            <table className="w-full table-auto border-collapse border border-gray-300 mb-4 text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-2 py-1">সমস্যা</th>
                  <th className="border border-gray-300 px-2 py-1">অংশ</th>
                  <th className="border border-gray-300 px-2 py-1">কারণ</th>
                  <th className="border border-gray-300 px-2 py-1">প্রভাব</th>
                </tr>
              </thead>
              <tbody>
                {report.details.map((row, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 px-2 py-1">{row.problem}</td>
                    <td className="border border-gray-300 px-2 py-1">{row.part}</td>
                    <td className="border border-gray-300 px-2 py-1">{row.cause}</td>
                    <td className="border border-gray-300 px-2 py-1">{row.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="text-xl font-semibold mb-2">✅ সমাধান:</h3>
            <ul className="list-disc list-inside mb-4">
              {report.solutions.map((sol, i) => (
                <li key={i}>{sol}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">📋 চেকলিস্ট:</h3>
            <ul className="list-disc list-inside mb-4">
              {report.checklist.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">➡️ পরবর্তী করণীয়:</h3>
            <ul className="list-disc list-inside mb-4">
              {report.nextSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
