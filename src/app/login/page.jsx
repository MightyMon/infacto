'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon } from 'react-icons/fi'; // Assuming you're using the Fi icons from react-icons
import React, { useState } from 'react';        

const LOGIN_URL = "http://127.0.0.1:8001/api/token/pair"

export default function LoginPage(){
    async function handleSubmit(event){
        console.log(event.target)  
        const formData = new FormData(event.target)
        const objectFromForm = Object.fromEntries(formData)
        const jsonData = JSON.stringify(objectFromForm)
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body : jsonData
        }
        const response = await fetch(LOGIN_URL,requestOptions)
        console.log
    }
    return (<div className="flex items-center justify-center w-full max-w-4xl mx-auto">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Enter your credentials to access your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex items-center space-x-4 gap-4" onSubmit={handleSubmit} >
              <div className="flex-1 space-y-2" style={{ paddingBottom: 20 }}>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  required
                  ></Input>
              </div>
              <div className="flex-1 space-y-2" style={{ paddingBottom: 20 }}>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                ></Input>
                   
              </div>
              <div style={{ paddingBottom: 0 }}>
                <Button className="h-10 mt-2 self-end" type="submit">sign in</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      )
}