import { useDataAccessObject } from "../../hooks/useDataAccessObject";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useStateToValue } from "../../hooks/useStateToValue";
import { IComment } from "../../model/IComment";
import { LanguageType } from "../../types/LanguageType";
import { AppContext } from "../../data/AppContext";
import { IAppContextFrameProps } from "./IAppContextFrameProps";
import { VotingState } from "../../model/VotingState";

const AppContextFrame: React.FC<IAppContextFrameProps> = (props) => {
  return (
    <AppContext.Provider
      value={{
        comments: {
          negativeDAO: useDataAccessObject<IComment>([
            {
              id: crypto.randomUUID(),
              countAgrees: 0,
              countDisagrees: 0,
              text: "Test Negative",
              votingState: VotingState.Open,
            },
          ]),
          positiveDAO: useDataAccessObject<IComment>([
            {
              id: crypto.randomUUID(),
              countAgrees: 0,
              countDisagrees: 0,
              text: "Test Positive",
              votingState: VotingState.Open,
            },
          ]),
          proposalDAO: useDataAccessObject<IComment>([
            {
              id: crypto.randomUUID(),
              countAgrees: 0,
              countDisagrees: 0,
              text: "Test Proposal",
              votingState: VotingState.Open,
            },
          ]),
        },
        language: useStateToValue(useLocalStorage("language", LanguageType.en)),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextFrame;
