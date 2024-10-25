import { GradientBackground } from '../components/gradient'
import { Checkbox, Field, Input, Label } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import clsx from 'clsx'

const Login = () => {

    return (
        <main className="overflow-hidden bg-gray-50">
            <GradientBackground />
            <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
                <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
                    <form className="p-7 sm:p-11">
                        <h1 className="text-base/6 font-medium">Welcome back!</h1>
                        <p className="mt-1 text-sm/5 text-gray-600">
                            Sign in to your account to continue.
                        </p>
                        <Field className="mt-8 space-y-3">
                            <Label className="text-sm/5 font-medium">User Name</Label>
                            <TextInput
                                required
                                autoFocus
                                type="text"
                                name="username"
                            />
                        </Field>
                        <Field className="mt-8 space-y-3">
                            <Label className="text-sm/5 font-medium">Password</Label>
                            <TextInput
                                required
                                type="password"
                                name="password"
                            />
                        </Field>
                        <div className="mt-8">
                            <Button type="submit" className="w-full py-2 bg-gray-900">
                                Sign in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login