import { Tooltip, Button } from "@nextui-org/react";
import { RiInformation2Line } from "react-icons/ri";

export default function Tooltips({ text }: any) {
  return (
    <Tooltip
      showArrow={true}
      content={
        <span
          style={{
            maxWidth: "180px",
            wordWrap: "break-word",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px",
            borderRadius: "15px",
          }}
        >
          {text}
        </span>
      }
    >
      <Button>
        <RiInformation2Line />
      </Button>
    </Tooltip>
  );
}
