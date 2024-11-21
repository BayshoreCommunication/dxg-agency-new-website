"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { handleProposalFormSubmit } from "@/actions/actions";

const formSchema = z.object({
  lastname: z.string().min(2, {
    message: "Name must be fill",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(7, {
    message: "Phone number must be valid",
  }),
  company: z.string().min(1, {
    message: "Company name must be fill",
  }),
  title: z.string().min(1, {
    message: "Title must be fill",
  }),
  // event_format: z.enum(['In-Person', 'Virtual', 'Hybrid']),
  // event_type: z.enum([
  //   'Sales',
  //   'Financial',
  //   'Healthcare',
  //   'Association',
  //   'Tech',
  //   'Others',
  // ]),
  // role_in_event: z.enum([
  //   'Budget Holder',
  //   'Decision Maker',
  //   'End User',
  //   'Event Organizer/Planner',
  //   'Procurement',
  // ]),

  event_format: z.string({
    required_error: "Event Format must be selected",
  }),
  event_type: z.string({
    required_error: "Event Type must be selected",
  }),
  role_in_event: z.string({
    required_error: "Role in Event must be selected",
  }),
  description: z.string().optional(),
  file: z.any().optional(),
});

const Modal = ({ onRequestClose }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastname: "",
      email: "",
      phone: "",
      company: "",
      title: "",
      description: "",
      file: null, // initialize file field with null
    },
  });

  // File validation function
  const validateFileUpload = (files: FileList | null) => {
    if (!files || files.length > 3) {
      alert("You can upload a maximum of three files at a time.");
      return false;
    }

    // check file format
    const validFileFormats = [
      "pdf",
      "png",
      "jpg",
      "jpeg",
      "doc",
      "docx",
      "txt",
      "rtf",
      "xls",
      "xlsx",
      "ppt",
      "pptx",
    ];

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name;
        const fileExtension = fileName.split(".").pop();
        if (fileExtension && !validFileFormats.includes(fileExtension)) {
          alert(
            "File format not supported. Please upload pdf, docs, png, jpg, jpeg, txt, rtf, xls, xlsx, ppt, pptx"
          );
          return false;
        }
      }
    }

    let totalFileSize = 0;

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size) {
          totalFileSize += file.size;
        }
      }

      if (totalFileSize > 20971520) {
        alert("Total file(s) size should not exceed 20MB.");
        return false;
      }
    }

    return true;
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const isValid = validateFileUpload(files);

    // Update form state or show error message based on validation result
    if (isValid) {
      // If valid, update form state
      form.setValue("file", files);
    } else {
      // If not valid, clear the file input
      form.setValue("file", null);
      e.target.value = ""; // Reset the file input value
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const validationErrors = form.formState.errors;
    if (Object.keys(validationErrors).length === 0) {
      form.clearErrors();
      setIsLoading(true);
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        // Customize field names as needed
        let fieldName;
        switch (key) {
          case "lastname":
            fieldName = "Last Name";
            break;
          case "email":
            fieldName = "Email";
            break;
          case "phone":
            fieldName = "Phone";
            break;
          case "company":
            fieldName = "Company";
            break;
          case "title":
            fieldName = "Designation";
            break;
          case "event_format":
            fieldName = "LEADCF3";
            break;
          case "event_type":
            fieldName = "LEADCF4";
            break;
          case "role_in_event":
            fieldName = "LEADCF1";
            break;
          case "description":
            fieldName = "Description";
            break;
          default:
            fieldName = key;
        }
        if (key === "file" && value instanceof FileList) {
          // for (let i = 0; i < value.length; i++) {
          //   formData.append(`theFile${i}`, value[i]);
          // }
          formData.append(`theFile`, value[0]);
        } else {
          formData.append(fieldName, value);
        }
      });
      const result = await handleProposalFormSubmit(formData);
      if (result) {
        setTimeout(() => {
          form.reset();
          onRequestClose(); // Close the modal
          router.push("/thank-you");
        }, 1000);
      }
    }
    setIsLoading(false);
  };
  return (
    <div className="modalContainer">
      <div className="form-container my-5">
        <div>
          <div className="absolute right-2">
            <button
              className="float-right h-8 w-8 rounded-full border text-xl font-bold text-white"
              onClick={onRequestClose}
            >
              X
            </button>
          </div>
          <div className="mb-4 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white">
              Request a Proposal
            </h1>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-white">Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+9901265891" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-white">Company</FormLabel>
                    <FormControl>
                      <Input placeholder="XYZ Technologies" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-white">Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Software Engineer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="event_format"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-white">Event Format</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="">
                          <SelectValue placeholder="-None-" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="In-Person">In-Person</SelectItem>
                          <SelectItem value="Virtual">Virtual</SelectItem>
                          <SelectItem value="Hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="event_type"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-white">Event Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="">
                          <SelectValue placeholder="-None-" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sales">Sales</SelectItem>
                          <SelectItem value="Financial">Financial</SelectItem>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                          <SelectItem value="Association">
                            Association
                          </SelectItem>
                          <SelectItem value="Tech">Tech</SelectItem>
                          <SelectItem value="Others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role_in_event"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-white">
                      Role in the Event
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="">
                          <SelectValue placeholder="-None-" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Budget Holder">
                            Budget Holder
                          </SelectItem>
                          <SelectItem value="Decision Maker">
                            Decision Maker
                          </SelectItem>
                          <SelectItem value="End User">End User</SelectItem>
                          <SelectItem value="Event Organizer&#x2f;Planner">
                            Event Organizer&#x2f;Planner
                          </SelectItem>
                          <SelectItem value="Procurement">
                            Procurement
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="description"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-white">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Type your message here."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Controller
                name="file"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-white">
                      Upload File(pdf, docs)
                    </FormLabel>
                    <FormControl>
                      <Input type="file" onChange={handleFileChange} multiple />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Controller
                name="checkbox"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                    <FormControl>
                      <Checkbox checked disabled />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-white">
                        I agree to the{" "}
                        <Link
                          href="/privacy-policy"
                          target="_blank"
                          className="underline"
                        >
                          Privacy Policy
                        </Link>{" "}
                        and
                        <Link
                          href="/terms-of-use"
                          className="underline"
                          target="_blank"
                        >
                          {" "}
                          Terms of Service.{" "}
                        </Link>
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button
                variant="default"
                type="submit"
                className="mt-5 w-full border-brand bg-brand font-bold text-white hover:border hover:text-brand"
              >
                {isLoading && (
                  <svg
                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                SUBMIT
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default function ProposalForm() {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  return (
    <div className="">
      {isModalOpen && <Modal onRequestClose={toggleModal} />}
      <Button
        onClick={toggleModal}
        className="capsule-hover capsule-button rounded-full bg-brand px-5 py-2 font-semibold text-white"
      >
        Request for Proposal
      </Button>
    </div>
  );
}
