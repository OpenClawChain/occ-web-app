import fs from 'fs';
import path from 'path';
import SkillContent from './SkillContent';

export default function SkillDetailPage() {
  const markdownPath = path.join(process.cwd(), 'public', 'skills', 'claw-strk.md');
  const markdownContent = fs.readFileSync(markdownPath, 'utf-8');

  return <SkillContent markdownContent={markdownContent} />;
}
