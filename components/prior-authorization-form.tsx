"use client"

import { FC, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card"
import { Button } from "./ui/button"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form"
import { Input } from "./ui/input"
import { ReloadIcon } from "@radix-ui/react-icons"

// Form schema for validation if we want to add more forms
export const PriorAuthorizationFormSchema = z.object({
  recordFile: z.custom<File>((v) => v instanceof File, {
    message: "PDF is required"
  }),
  guidelineFile: z.custom<File>((v) => v instanceof File, {
    message: "PDF is required"
  })
})

interface Props {
  onSubmit: (values: z.infer<typeof PriorAuthorizationFormSchema>) => void
  error?: string
  loading?: boolean
}

/** 
 * Form for submitting a prior authorization analysis to the copilot. Allows users to upload a guidelines and patient medical record pdf.
 */
const PriorAuthorizationForm: FC<Props> = ({
  onSubmit,
  error,
  loading
}: Props) => {
  const form = useForm<z.infer<typeof PriorAuthorizationFormSchema>>({
    resolver: zodResolver(PriorAuthorizationFormSchema)
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prior Authorization Form</CardTitle>
        <CardDescription>
          Please upload the patient&apos;s medical record and the guideline file
          in pdf format. The copilot will then complete the prior authorization
          workflow and deliver results.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="recordFile"
              render={({ field: { onChange } }) => (
                <FormItem>
                  <FormLabel>Medical Record</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf"
                      id="recordFile"
                      className="cursor-pointer"
                      // Omit fieldState and formState to silence error
                      // {...field}
                      onChange={(e) => {
                        onChange(e.target.files ? e.target.files[0] : null)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guidelineFile"
              render={({ field: { onChange }, ...field }) => (
                <FormItem>
                  <FormLabel>Guidelines</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf"
                      id="guidelineFile"
                      className="cursor-pointer"
                      // {...field}
                      onChange={(e) => {
                        onChange(e.target.files ? e.target.files[0] : null)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={!form.formState.isValid && !loading}
            >
              {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{" "}
              Submit
            </Button>
            {error && <div className="text-red-500">{error}</div>}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
export default PriorAuthorizationForm
