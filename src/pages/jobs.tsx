import GlossaryPage from '../components/glossary/glossary';
import { NPCsDefine } from '../components/glossary/npcs/NPCsDefine';

const pageSettings = {
  title: "職業ストーリー",
  glossary: NPCsDefine,
  description: "メイプルストーリーの職業ストーリーを3行で解説"
}

export default function Page() {
  return <>
    <GlossaryPage pageSettings={pageSettings} />
  </>
}