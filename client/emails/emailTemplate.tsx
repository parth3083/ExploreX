import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const StripeWelcomeEmail = () => (
  <Html>
    <Head />

    <Body style={main} className="font-pop">
      <Container style={container}>
        <Section style={box}>
          <h1 className="font-pop text-4xl font-semibold">ExploreX.</h1>
          <Hr style={hr} />
          <Text style={paragraph}>
            Thank you for reaching out to ExploreX. We’ve received your details
            and will get back to you as soon as possible.
          </Text>
          <Text style={paragraph}>
            Your inquiry is important to us, and our team is committed to
            providing you with the best possible assistance.
          </Text>
          <Button style={button} href="https://dashboard.stripe.com/login">
            Explore more on ExploreX.
          </Button>
          <Hr style={hr} />

          <Text style={paragraph}>
            Rest assured, whether it’s a question about our services, feedback
            to help us improve, or an issue that needs resolving, we’re here to
            assist you every step of the way.
          </Text>

          <Text style={paragraph}>
            Thank you for choosing ExploreX. We look forward to serving you and
            ensuring your experience with us is nothing short of excellent.
          </Text>
          <Text style={paragraph}>— ExploreX</Text>
          <Hr style={hr} />
          <Text style={footer}>ExploreX., Vadodara Gujarat, India 390011</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default StripeWelcomeEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const button = {
  backgroundColor: "#252525",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
