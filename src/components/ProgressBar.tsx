import { LinearProgress, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { timeTransformer2 } from "../helpers/timeTransformer";
import {
  selectLettersFall,
  selectLettersObtained,
  selectLimitLettersFall,
  selectProgressValue,
  selectTimer,
} from "../store/App.selectors";
import { ProgressContainer, Text } from "../styles/General";

export default function ProgressBar() {
  const timer = useSelector(selectTimer);
  const lettersObtained = useSelector(selectLettersObtained);
  const lettersFall = useSelector(selectLettersFall);
  const limitLettersFall = useSelector(selectLimitLettersFall);
  const progressValue = useSelector(selectProgressValue);

  return (
    <ProgressContainer>
      <LinearProgress
        variant="determinate"
        value={progressValue}
        sx={{
          height: "100%",
        }}
      />
      <Stack mt={1} direction="row" justifyContent="space-evenly" gap={2}>
        <InfoItem title="Tempo" content={timeTransformer2(timer)} />
        <InfoItem title="Apanhadas" content={lettersObtained.toString()} />
        <InfoItem
          title="Caídas"
          content={`${lettersFall}/${limitLettersFall}`}
        />
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
    <Stack alignItems="center">
      <Text variant="subtitle2">
        <b>{title.toUpperCase()}</b>
      </Text>
      <Text variant="subtitle2" color="Highlight">
        {content}
      </Text>
    </Stack>
  );
}
