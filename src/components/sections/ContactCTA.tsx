import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
});

type FormValues = z.infer<typeof schema>;

// Mock async submission to demonstrate React Query mutation wiring.
async function submitContact(values: FormValues): Promise<{ ok: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  if (!values.email) throw new Error("Submission failed");
  return { ok: true };
}

export function ContactCTA() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: () => reset(),
  });

  const onSubmit = (values: FormValues) => mutation.mutate(values);

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border border-pulz-200 bg-gradient-to-br from-pulz-100 via-white to-pulz-100/50 p-8 shadow-card md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-pulz-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-pulz-400/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="eyebrow">Get started today</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                  Begin your{" "}
                  <span className="text-gradient-brand">wellness journey</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  Join the PulzFit community or talk to our team. Get launch
                  updates, exclusive offers and early access to new health
                  features.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                  {["Free shipping", "30-day returns", "2-year warranty"].map(
                    (item) => (
                      <span
                        key={item}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-pulz-500" />
                        {item}
                      </span>
                    )
                  )}
                </div>
              </Reveal>
            </div>

            <Reveal direction="left">
              <div className="glass-strong rounded-3xl p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {mutation.isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-10 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-pulz-500/15 text-pulz-500"
                      >
                        <CheckCircle2 className="h-8 w-8" />
                      </motion.div>
                      <h3 className="mt-5 font-display text-xl font-bold">
                        You're on the list!
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Thanks for reaching out. We'll be in touch shortly.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6"
                        onClick={() => mutation.reset()}
                      >
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                      noValidate
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Alex Morgan"
                          aria-invalid={!!errors.name}
                          {...register("name")}
                        />
                        {errors.name && (
                          <p className="text-xs text-pulz-deep">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          aria-invalid={!!errors.email}
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="text-xs text-pulz-deep">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="I'd love to learn more about PulzFit 1..."
                          aria-invalid={!!errors.message}
                          {...register("message")}
                        />
                        {errors.message && (
                          <p className="text-xs text-pulz-deep">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="gradient"
                        className="w-full"
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Get Started <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </Button>

                      {mutation.isError && (
                        <p className="text-center text-xs text-pulz-deep">
                          Something went wrong. Please try again.
                        </p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
