import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";

export function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checkterms, setCheckterms] = useState(false);
  const [formValidation, setFormValidation] = useState({
    email: undefined,
    name: undefined,
    checkterms: undefined,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);

    setFormValidation({
      ...formValidation,
      email:
        value.length === 0
          ? "Email is required"
          : isValidEmail
          ? ""
          : "Email is invalid",
    });

    setEmail(value);
  };

  const handleNameChange = (event) => {
    const value = event.target.value;

    setFormValidation({
      ...formValidation,
      name: value.length === 0 ? "Name is required" : "",
    });

    setName(value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleChecktermsChange = (event) => {
    const checked = event.target.checked;

    setFormValidation({
      ...formValidation,
      checkterms: !checked
        ? "Please read and accept the terms and conditions"
        : "",
    });

    setCheckterms(checked);
  };

  const isFormValid = Object.keys(formValidation).every(
    (key) => formValidation[key] === ""
  );

  return (
    <Flex backgroundColor="gray.100" direction="column">
      <Box>
        <Flex p={5} position="absolute" right={10}>
          <Spacer />
          <Button as={RouterLink} to="/" colorScheme="teal" mr={2}>
            Home
          </Button>
          <Spacer />
          <Button as={RouterLink} to="/task-app" colorScheme="teal">
            Task App
          </Button>
        </Flex>
      </Box>
      <Box>
        <Heading
          as="h5"
          size="md"
          color="black"
          textAlign="center"
          pl={40}
          pr={40}
          pt={40}
        >
          Let us know how we can help you, we hope to respond as soon as
          possible.
        </Heading>
      </Box>
      <Box>
        <Flex width="100vw" alignItems="center" justifyContent="center" p={7}>
          <Box
            w="40%"
            p={5}
            borderWidth={1}
            borderRadius="lg"
            bg="gray.700"
            m={5}
          >
            <Box onSubmit={handleSubmit}>
              <FormControl
                id="name"
                color="white"
                isRequired
                isInvalid={!!formValidation.name}
              >
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  color="white"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
                <FormErrorMessage>{formValidation.name}</FormErrorMessage>
              </FormControl>

              <FormControl
                id="email"
                color="white"
                mt={4}
                isRequired
                isInvalid={!!formValidation.email}
              >
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  color="white"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <FormErrorMessage>{formValidation.email}</FormErrorMessage>
              </FormControl>

              <FormControl id="message" mt={4} color="white">
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Type your message here"
                  color="white"
                  value={message}
                  onChange={handleMessageChange}
                />
              </FormControl>

              <FormControl
                id="terms"
                color="white"
                mt={4}
                isInvalid={!!formValidation.checkterms}
              >
                <Checkbox
                  isChecked={checkterms}
                  onChange={handleChecktermsChange}
                  color="white"
                >
                  Terms & conditions: I accept that my data is treated according
                  to current laws.
                </Checkbox>
                <FormErrorMessage>{formValidation.checkterms}</FormErrorMessage>
              </FormControl>

              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                isDisabled={!isFormValid}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
