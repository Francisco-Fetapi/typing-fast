import { LinearProgress, Stack } from "@mui/material";
import { ProgressContainer, Text } from "../styles/General";

export default function ProgressBar() {
  return (
    <ProgressContainer>
      <LinearProgress
        variant="determinate"
        value={20}
        sx={{
          height: "100%",
        }}
      />
      <Stack mt={1} direction="row" justifyContent="space-evenly" gap={2}>
        <InfoItem title="Tempo" content="02m:12s" />
        <InfoItem title="Apanhadas" content="0" />
        <InfoItem title="Caidas" content="0/10" />
      </Stack>
    </ProgressContainer>
  );
}

interface InfoItemProps {
  title: string;
  content: string;
}

function InfoItem({ title, content }: InfoItemProps) {
  return (
    <Text variant="subtitle2">
      <b>{title.toUpperCase()}:</b> {content}
    </Text>
  );
}
