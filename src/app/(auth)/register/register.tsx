import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

const RegistrationSchema = z.object({
  username: z.string().min(3, 'Username is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

type RegistrationFormValues = z.infer<typeof RegistrationSchema>

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormValues>({
    resolver: zodResolver(RegistrationSchema),
  })

  const onSubmit = async (data: RegistrationFormValues) => {
    try {
      // Replace with your registration logic
      console.log('Registration data:', data)
      toast({
        title: 'Registration Successful',
        description: 'You have successfully registered!',
      })
    } catch (error) {
      console.error('Registration error:', error)
      toast({
        title: 'Registration Failed',
        description: 'There was an error during registration.',
      })
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <Input id="username" {...register('username')} />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <Input id="email" type="email" {...register('email')} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <Input id="password" type="password" {...register('password')} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <Button type="submit" className="w-full">Register</Button>
      </form>
    </div>
  )
}

export default RegisterPage
