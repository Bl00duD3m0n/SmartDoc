// src/app/components/MainScreen.js
"use client";
import { Button } from "./ui/button";

export default function MainScreen() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center" style={{ backgroundColor: 'white', color: 'black' }}>
      <div className="mb-8 flex items-center">
        <MountainIcon className="h-8 w-8" style={{ color: 'black' }} />
        <span className="ml-2 text-2xl font-bold">SmartDoc</span>
      </div>
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Document Management</h2>
            <p className="mb-6">Securely manage all your documents in one place.</p>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="primary">Upload Document</Button>
              <Button variant="secondary">View Documents</Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Collaboration</h2>
            <p className="mb-6">Easily share and collaborate on documents with your team.</p>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="primary">Share Document</Button>
              <Button variant="secondary">Manage Permissions</Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Search & Organize</h2>
            <p className="mb-6">Easily find and organize your documents.</p>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="primary">Search Documents</Button>
              <Button variant="secondary">Create Folders</Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Security & Compliance</h2>
            <p className="mb-6">Keep your documents secure and compliant.</p>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="primary">Set Permissions</Button>
              <Button variant="secondary">View Audit Logs</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: 'black' }}
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
