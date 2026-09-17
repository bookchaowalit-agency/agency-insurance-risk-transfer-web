export type PseoService = Readonly<{
  kind: 'service';
  slug: string;
  name: string;
  title: string;
  description: string;
  intent: string;
  buyer: string;
  context: string;
  workflow: readonly string[];
  deliverables: readonly string[];
  evidence: readonly string[];
  readiness: string;
  agencySlug: string;
  agencyName: string;
  agencyThaiName: string;
  agencyStatus: 'incubating' | 'target' | 'locked';
  agencyStage: string;
}>;

export const pseoService: PseoService = {
  "kind": "service",
  "slug": "risk-transfer-readiness-map",
  "name": "Risk-data and transfer readiness map (future)",
  "title": "Risk-Transfer Readiness Map สำหรับความเสี่ยงที่ต้องจัดโครงสร้าง",
  "description": "วาง data, exposure และ partner handoff สำหรับงานที่ต้องใช้ผู้มีใบอนุญาต",
  "intent": "ต้องการทำให้ exposure และ risk data พร้อมสำหรับการเลือกวิธีรับหรือโอนความเสี่ยง",
  "buyer": "Risk owner, broker, insurer และ capital partner",
  "context": "เป็น future capability สำหรับ readiness และ data map ไม่ใช่ผู้รับประกัน นายหน้า หรือผู้ให้คำแนะนำด้านการลงทุน",
  "workflow": [
    "กำหนด risk event, exposure และ decision owner",
    "ตรวจ data quality, uncertainty และ evidence ที่ใช้ได้",
    "ทำ transfer option และ qualified-partner question map",
    "ส่ง readiness pack ให้ risk owner, broker หรือ insurer ตรวจ"
  ],
  "deliverables": [
    "exposure/data boundary",
    "risk evidence และ uncertainty register",
    "partner handoff brief",
    "review cadence และ decision record"
  ],
  "evidence": [
    "ไม่อ้าง premium, coverage, claim outcome หรือใบอนุญาต",
    "ไม่รับข้อมูล policy หรือ personal risk ผ่าน public website",
    "การจัดจำหน่ายและคำแนะนำที่ regulated ต้องส่งต่อผู้มีใบอนุญาต"
  ],
  "readiness": "ต้องมี risk-transfer lead, licensed reviewer/partner, data consent และ retention boundary ก่อนเปิด inquiry",
  "agencySlug": "insurance-risk-transfer",
  "agencyName": "Insurance & Risk Transfer",
  "agencyThaiName": "ประกันภัยและการโอนความเสี่ยง",
  "agencyStatus": "locked",
  "agencyStage": "P3"
};
