import GlossaryPage from '../components/glossary/glossary';
import { NPCsDefine } from '../components/glossary/npcs/NPCsDefine';

const pageSettings = {
  title: "地域ストーリー",
  glossary: NPCsDefine,
  description: "メイプルストーリーの地域ストーリーを3行で解説"
}

export default function Page() {
  return <>
    <GlossaryPage pageSettings={pageSettings} />
  </>
}