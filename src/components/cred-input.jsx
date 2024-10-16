"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon } from 'react-icons/fi'; // Assuming you're using the Fi icons from react-icons
import React, { useState } from 'react';


export function CredInput() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit")
    try {
      const response = await fetch('http://localhost:8001/api/getinstagramcreds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        // Handle success (e.g., show a success message or redirect)
      } else {
        console.error('Error submitting form:', response.statusText);
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle network error
    }
  };
  return (
    <div className="flex items-center justify-center w-full max-w-4xl mx-auto">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex items-center space-x-4 gap-4" onSubmit={handleSubmit}>
            <div className="flex-1 space-y-2" style={{ paddingBottom: 20 }}>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1 space-y-2" style={{ paddingBottom: 20 }}>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ paddingBottom: 0 }}>
              <Button className="h-10 mt-2 self-end" type="submit">Sign In</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
        