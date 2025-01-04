import * as React from "react";

interface EmailTemplateProps {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

export default function EmailTemplate({
  name,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>New Message from {name}</h1>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong> {message}
      </p>
    </div>
  );
}
