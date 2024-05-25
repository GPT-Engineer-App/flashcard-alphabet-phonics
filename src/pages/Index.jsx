import React, { useState } from "react";
import { Container, VStack, HStack, Button, Text, Box, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const flashcardSets = {
  alphabets: [
    { front: "A", back: "Apple" },
    { front: "B", back: "Ball" },
    { front: "C", back: "Cat" },
    // Add more alphabets as needed
  ],
  phonics1: [
    { front: "a", back: "ant" },
    { front: "e", back: "elephant" },
    { front: "i", back: "igloo" },
    // Add more phonics level 1 as needed
  ],
  phonics2: [
    { front: "sh", back: "ship" },
    { front: "ch", back: "chicken" },
    { front: "th", back: "thumb" },
    // Add more phonics level 2 as needed
  ],
  phonics3: [
    { front: "ai", back: "rain" },
    { front: "ee", back: "tree" },
    { front: "oo", back: "moon" },
    // Add more phonics level 3 as needed
  ],
  others: [
    { front: "1", back: "One" },
    { front: "2", back: "Two" },
    { front: "3", back: "Three" },
    // Add more other sets as needed
  ],
};

const Flashcard = ({ front, back, isFlipped }) => (
  <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" textAlign="center" width="200px" height="200px" display="flex" alignItems="center" justifyContent="center" fontSize="2xl" bg={isFlipped ? "teal.500" : "white"} color={isFlipped ? "white" : "black"} cursor="pointer">
    {isFlipped ? back : front}
  </Box>
);

const Index = () => {
  const [currentSet, setCurrentSet] = useState("alphabets");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardSets[currentSet].length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcardSets[currentSet].length) % flashcardSets[currentSet].length);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <HStack spacing={4}>
          <Button onClick={() => setCurrentSet("alphabets")}>Alphabets</Button>
          <Button onClick={() => setCurrentSet("phonics1")}>Phonics 1</Button>
          <Button onClick={() => setCurrentSet("phonics2")}>Phonics 2</Button>
          <Button onClick={() => setCurrentSet("phonics3")}>Phonics 3</Button>
          <Button onClick={() => setCurrentSet("others")}>Others</Button>
        </HStack>
        <HStack spacing={4}>
          <IconButton aria-label="Previous" icon={<FaArrowLeft />} onClick={handlePrev} />
          <Flashcard front={flashcardSets[currentSet][currentIndex].front} back={flashcardSets[currentSet][currentIndex].back} isFlipped={isFlipped} onClick={handleFlip} />
          <IconButton aria-label="Next" icon={<FaArrowRight />} onClick={handleNext} />
        </HStack>
        <Text>{`Set: ${currentSet.charAt(0).toUpperCase() + currentSet.slice(1)}, Card: ${currentIndex + 1}/${flashcardSets[currentSet].length}`}</Text>
      </VStack>
    </Container>
  );
};

export default Index;
