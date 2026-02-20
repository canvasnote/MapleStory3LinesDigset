import GlossaryPage from '../components/glossary/glossary';
import { NPCsDefine } from '../components/glossary/npcs/NPCsDefine';

const pageSettings = {
  title: "NPC",
  glossary: NPCsDefine,
  description: "メイプルストーリーのNPCを3行で解説"
}

export default function Page() {
  return <>
    <GlossaryPage pageSettings={pageSettings} />
  </>
}