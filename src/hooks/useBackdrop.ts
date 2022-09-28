import { BackdropProps } from "../components/GameBackdrop";

export default function useBackdrop() {
  const backdropGameOver = (props: Partial<BackdropProps>) =>
    Object.assign<Partial<BackdropProps>, Partial<BackdropProps>>(
      {
        title: "Game Over",
        message: "O número máximo de letras caídas foi atingido.",
        primaryButton: {
          text: "Repetir jogo",
        },
        open: true,
        type: "error",
        onMount() {},
      },
      props
    ) as BackdropProps;

  return {
    backdropGameOver,
  };
}
