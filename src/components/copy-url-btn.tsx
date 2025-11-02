import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";

export function ScriptCopyBtnDemo() {
  const customCommandMap = {
    npm: "https://mcp.devojha.in/mcp",
  };
  return (
    <ScriptCopyBtn
      showMultiplePackageOptions={false}
      codeLanguage="shell"
      lightTheme="nord"
      darkTheme="vitesse-dark"
      commandMap={customCommandMap}
    />
  );
}
