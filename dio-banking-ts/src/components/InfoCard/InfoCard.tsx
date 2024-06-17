import { Box, Icon, Text } from "@chakra-ui/react";

interface InfoCardProps {
  title: string;
  value: string;
}

export const InfoCard = ({ title, value }: InfoCardProps) => {
  return (
    <Box
      className="bg-zinc-800 rounded-lg p-4"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text className="text-zinc-100 text-lg font-semibold">{title}</Text>
      <Text className="text-zinc-100 text-2xl font-semibold">{value}</Text>
    </Box>
  );
}