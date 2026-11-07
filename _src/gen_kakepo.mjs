// Kakepo 개인정보 처리방침 · 이용약관 · 문의 (C7, 2026-11-07). 실행: node _src/gen_kakepo.mjs
//  → kakepo/{privacy,terms,support}/index.html (한국어, 앱 링크가 가리키는 곳) + kakepo/en/{privacy,terms,support}/index.html
// 내용 기준(실제 동작): app4-kakepo 빌드 12 — 서버 없음(오래된 기종 AI 중계는 꺼져 있음, 켤 때 동의), 결제 알림 원문·기록·잔액은 기기 안,
//  StoreKit 2 기기 안 검증(영수증을 어디로도 안 보냄), 사용 통계·오류 보고 키 없음(전송 0), 광고 없음.
// 운영자 '링(Ring)' 개인사업자, 문의 메일 tomokijang30@gmail.com(10-25 오너 확정 — shiftpay와 같음).
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const EMAIL = 'tomokijang30@gmail.com';
const EULA = 'https://www.apple.com/legal/internet-services/itunes/appstore/dev/stdeula/';
const EFFECTIVE = '2026-11-07';

const T = {
  ko: {
    nav: { privacy: '개인정보 처리방침', terms: '이용약관', support: '문의' },
    other: ['English', 'en/'],
    operator: '운영: 링(Ring), 대한민국 개인사업자',
    effective: `시행일: ${EFFECTIVE}`,
    privacy: {
      title: '개인정보 처리방침',
      intro: '링(이하 「회사」)은 Kakepo(결제 알림을 받아 오늘 쓸 수 있는 돈을 계산하는 가계부 앱, 이하 「앱」)를 운영하며, 「개인정보 보호법」 제30조와 같은 법 시행령 제31조에 따라 이 처리방침을 공개합니다.',
      sections: [
        ['제1조 한눈에', [
          '기록·결제 내역은 서버로 가지 않습니다. 회사는 서버를 두지 않고, 결제 알림 원문·기록·잔액은 사용자의 iPhone 안에만 있습니다.',
          '예외 한 가지: 오래된 iPhone에서 사용자가 동의하고 「AI 문장 정리」를 켠 경우, 사용자가 쓴 그 한 줄만 중계를 거쳐 Anthropic(미국)으로 보냅니다. 이 기능은 기본으로 꺼져 있고, 지금 판에서는 켤 수 없습니다.',
          '결제는 Apple StoreKit으로 하고, 구매 확인도 iPhone 안에서 합니다. 영수증과 거래 정보를 회사나 다른 곳으로 보내지 않습니다.',
          '가입·계정·로그인·광고·추적이 없고, 데이터를 팔지 않습니다.',
        ]],
        ['제2조 처리 목적', [
          '지출 자동 기록과 오늘 쓸 수 있는 돈 계산(사용자의 iPhone 안에서만).',
          '(선택, 기본 꺼짐) 사용자가 쓴 한 줄을 AI로 정리해 설정에 반영.',
          '문의 답변(사용자가 메일을 보낸 경우).',
        ]],
        ['제3조 처리하는 개인정보 항목', [
          'iPhone 안: 사용자가 만든 단축어가 넘긴 결제 알림의 제목·본문·보낸 앱·시각, 여기서 읽은 금액·가게·일시·카드사·은행 이름, 사용자가 넣은 잔액·월급날·나갈 돈·카드 결제일. 회사는 이 정보를 받지 않습니다.',
          '(선택) AI 문장 정리를 켠 경우: 사용자가 쓴 그 한 줄. 결제 알림 원문은 보내지 않습니다.',
          '문의 메일: 메일 주소와 내용.',
        ]],
        ['제4조 처리 및 보유 기간', [
          'iPhone 안의 데이터: 사용자가 앱에서 지우거나 앱을 삭제할 때까지 iPhone에만 있습니다. iCloud·컴퓨터 백업에 포함되며, 그 백업은 사용자의 Apple 계정 아래에 있습니다.',
          '(선택) AI 문장 정리: 중계는 보관하지 않고, Anthropic이 최대 30일 보관합니다.',
          '문의 메일: 답장 뒤 1년.',
        ]],
        ['제5조 제3자 제공', ['개인정보를 제3자에게 제공하지 않습니다.']],
        ['제6조 처리위탁', ['(선택 기능을 켠 경우에만) Anthropic, PBC — 사용자가 쓴 한 줄의 문장 정리.']],
        ['제7조 국외 이전(법 제28조의8)', [
          '이전 근거: 사용자의 별도 동의(기능을 켤 때 아래 내용을 먼저 보여 주고 동의를 받음). 기본 꺼짐.',
          '① 이전되는 항목: 사용자가 쓴 한 줄.',
          '② 이전되는 국가·시기·방법: 미국, 기능을 켜고 한 줄을 쓸 때마다, 암호화 통신(HTTPS).',
          '③ 이전받는 자: Anthropic, PBC(연락처: privacy@anthropic.com).',
          '④ 이전받는 자의 이용 목적·보유 기간: 문장 정리, 최대 30일.',
          '⑤ 거부 방법과 효과: 기능을 켜지 않거나 끄면 됩니다. 다른 기능은 그대로 씁니다.',
        ]],
        ['제8조 파기 절차·방법', [
          'iPhone 안의 데이터는 앱 안에서 지우거나 앱을 삭제하면 사라집니다. 회사가 따로 보관하는 사용자 데이터는 없습니다.',
          '문의 메일은 보유 기간이 지나면 메일함에서 지웁니다.',
        ]],
        ['제9조 정보주체의 권리와 행사 방법', [
          '기록의 열람·정정·삭제는 앱 안에서 직접 할 수 있습니다. 회사가 가진 데이터가 없어서 회사에 따로 요청할 것은 없지만, 궁금한 점은 메일로 물어보세요. 10일 안에 답합니다.',
          'AI 문장 정리 동의는 언제든 기능을 끄는 것으로 철회합니다.',
        ]],
        ['제10조 안전성 확보 조치', ['iOS 앱 샌드박스와 데이터 보호(기기 잠금 시 암호화), 전송 시 HTTPS, 서버에 보관하지 않음, 필요한 최소한만 처리.']],
        ['제11조 자동화된 결정', ['앱의 자동 분류(가게 → 칸, 출금 → 옮긴 돈 등)는 사용자 iPhone 안의 계산이며 법적 효과가 있는 결정이 아닙니다. 사용자가 1탭으로 바로잡을 수 있습니다.']],
        ['제12조 아동', ['앱은 14세 미만을 대상으로 하지 않습니다.']],
        ['제13조 개인정보 보호책임자', [
          `성명: 링 대표 [오너 성명 — 기재 필요] · 메일: ${EMAIL}`,
        ]],
        ['제14조 권익침해 구제 방법', [
          '개인정보침해신고센터 국번 없이 118 (privacy.kisa.or.kr) · 개인정보 분쟁조정위원회 1833-6972 (www.kopico.go.kr) · 대검찰청 1301 · 경찰청 182',
        ]],
        ['제15조 변경', [`시행일: ${EFFECTIVE}. 바뀌면 이 페이지에 시행일과 함께 올리고, 새로운 정보를 처리하게 되는 등 중요한 변경은 7일 전에 알립니다.`]],
      ],
    },
    terms: {
      title: '이용약관',
      intro: 'Kakepo 사용에는 Apple 표준 최종 사용자 사용권 계약(Standard EULA)이 적용됩니다:',
      sections: [
        ['구독과 결제', [
          'Kakepo 1년: 1년 단위 자동 갱신 구독입니다. 처음 쓰는 사람은 7일 무료 체험이 있고, 체험이 끝날 때까지 해지하지 않으면 1년 요금이 결제됩니다. 체험 자격은 Apple이 정합니다.',
          '한국에서는 무료 체험이 유료로 바뀌기 전에 App Store가 따로 동의를 받습니다.',
          '구독은 현재 기간이 끝나기 24시간 전까지 해지하지 않으면 자동으로 갱신됩니다. 요금은 구매를 확인할 때 Apple 계정으로 결제됩니다.',
          'Kakepo 평생: 한 번 결제로 계속 쓰는 상품입니다(구독 아님).',
          '가격은 결제 화면과 App Store에 나옵니다.',
          '해지: iPhone 설정 > 이름 > 구독. 환불은 Apple에 요청합니다: https://reportaproblem.apple.com',
          '새 iPhone이나 다시 설치한 뒤에는 같은 Apple 계정으로 앱의 결제 화면에서 「구매 복원」을 누릅니다.',
        ]],
        ['체험이 끝나거나 구독이 끝나면', [
          '자동 기록, 잠금화면 숫자, 결제 직후 한 줄, 단축어 동작이 멈춥니다. 이미 넣은 기록과 잔액은 앱 안에서 계속 볼 수 있습니다.',
        ]],
        ['계산은 참고용', [
          '앱의 숫자는 사용자가 넣은 잔액과 받은 알림으로 계산한 참고값입니다. 알림이 오지 않거나 늦거나 금액이 없으면 실제와 다를 수 있습니다. 금융·세무 상담이 아닙니다.',
          '은행·카드 알림을 앱으로 넘기는 것은 iPhone 단축어 앱의 자동화입니다. 그 동작은 Apple과 각 은행·카드 앱의 알림 설정에 따라 달라질 수 있습니다.',
        ]],
        ['환불', ['Apple 결제는 Apple 환불 정책을 따릅니다(https://reportaproblem.apple.com). 「전자상거래 등에서의 소비자보호에 관한 법률」 제17조 제2항 제5호에 따라 디지털 콘텐츠는 제공이 시작되면 청약철회가 제한될 수 있으며, 회사는 7일 무료 체험으로 미리 써 볼 수 있게 합니다.']],
        ['면책', ['자동으로 읽은 결과의 정확성을 보장하지 않습니다. 금융 조언이 아닙니다. 회사는 은행·카드사와 제휴 관계가 없습니다.']],
        ['AI 기능(선택)', ['기본 꺼짐. 켤 때만 사용자가 쓴 한 줄을 Anthropic(미국)으로 보내며, 자세한 내용은 개인정보 처리방침 제7조에 있습니다.']],
        ['판매자 정보', [`상호: 링 · 대표자: [오너 성명 — 기재 필요] · 사업자등록번호: [기재 필요] · 주소: [기재 필요] · 메일: ${EMAIL}`]],
      ],
    },
    support: {
      title: '문의',
      intro: '앱이 알림을 못 읽거나 숫자가 이상하면 메일을 보내 주세요. iPhone 모델, iOS 버전, 앱 버전을 적어 주면 빨리 답할 수 있어요. 결제 알림 원문을 보낼 때는 이름·계좌번호를 가려 주세요.',
      faq: [
        ['결제했는데 기록이 안 돼요', '① 단축어 앱의 알림을 껐는지 ② 그 은행·카드 앱 알림의 「미리 보기 표시」가 「항상」인지 ③ 자동화가 켜져 있고 「즉시 실행」·「잠긴 상태에서 실행 허용」이 켜져 있는지 순서대로 봐 주세요. 앱 설정 > 못 읽은 알림에 원문이 있으면 단축어는 돌았고 앱이 문구를 못 읽은 것입니다.'],
        ['구매했는데 안 켜져요 · 해지는 어떻게 해요', '결제 화면의 「구매 복원」을 눌러 주세요(산 Apple 계정으로 로그인한 상태). 해지는 iPhone 설정 > 이름 > 구독에서 합니다.'],
      ],
    },
  },
  en: {
    nav: { privacy: 'Privacy Policy', terms: 'Terms of Use', support: 'Support' },
    other: ['한국어', '../'],
    operator: 'Operated by Ring (링), a sole proprietorship in the Republic of Korea.',
    effective: `Effective date: ${EFFECTIVE}`,
    privacy: {
      title: 'Privacy Policy',
      intro: 'This policy explains how Kakepo (a budgeting app that reads payment alerts and shows how much you can spend today, "the App") handles information.',
      sections: [
        ['Summary', [
          'We collect no personal data. There is no sign-up, account or login, and we do not collect your name, email, phone number, location, contacts or photos.',
          'Records and payment details never go to a server. Payment alert text, records, balances and settings stay only on your iPhone. One exception: on older iPhones, if you consent and turn on AI sentence parsing (off by default, not yet available), only the one line you typed is relayed to Anthropic (USA), kept up to 30 days.',
          'Purchases use Apple StoreKit and are verified on your iPhone. Receipts and transaction details are not sent to us or anyone else.',
          'No ads, no advertising SDKs, no cross-app tracking, and we never sell data.',
        ]],
        ['What is stored on your iPhone', [
          'Payment alerts: the title, body, sending app and time passed in by the Shortcuts automation you set up. The App reads amount, shop and card from them; alerts it cannot read are kept as-is under "Unread alerts".',
          'Values used for the calculation: balance, payday, upcoming payments, card payment days, and the bank and card names you chose.',
          'Where: the App\'s own folder and its App Group (shared only with the App\'s own widget and Shortcuts actions).',
          'This data is part of your normal iPhone backup (iCloud or computer), kept under your Apple Account. We cannot access it. Deleting the App deletes it from your iPhone.',
        ]],
        ['Servers and transfers', [
          'The App sends no data to our servers.',
          'The AI sentence feature for older iPhones (a relay) is currently off. If we turn it on, the App will first show a consent screen that says exactly what is sent, and send that one line only if you agree. We will update this policy first.',
          'This version has no usage analytics or crash reporting. If added, we will ask for consent and update this policy first.',
        ]],
        ['Purchases', [
          'Kakepo 1 Year (auto-renewing, 7-day free trial for eligible users) and Kakepo Lifetime (one-time) are processed by Apple. We never see card details. Apple\'s policy: https://www.apple.com/legal/privacy/',
        ]],
        ['Contact and changes', [
          `Privacy contact: the representative of Ring, ${EMAIL}. Emails you send are used only to reply and deleted 1 year after we reply.`,
          'Changes are posted here with a new effective date; important changes are announced at least 7 days in advance.',
        ]],
      ],
    },
    terms: {
      title: 'Terms of Use',
      intro: 'Your use of Kakepo is governed by Apple\'s Standard Licensed Application End User License Agreement (Standard EULA):',
      sections: [
        ['Subscriptions and payment', [
          'Kakepo 1 Year is an auto-renewing yearly subscription with a 7-day free trial for eligible users. The yearly price is charged when the trial ends unless you cancel at least 24 hours before. In Korea, the App Store asks for separate consent before a trial turns paid.',
          'Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period. Payment is charged to your Apple Account at confirmation of purchase.',
          'Kakepo Lifetime is a one-time purchase, not a subscription. Prices are shown on the purchase screen and in the App Store.',
          'Manage or cancel: iPhone Settings > your name > Subscriptions. Refunds: https://reportaproblem.apple.com. Use "Restore purchases" on a new iPhone.',
        ]],
        ['When the trial or subscription ends', ['Auto-recording, the Lock Screen number, the after-payment line and Shortcuts actions stop. Records and balances you already have stay visible in the App.']],
        ['Estimates', ['Numbers are estimates from the balance you enter and the alerts received. Missing or late alerts can make them differ. Not financial or tax advice.']],
        ['Contact', [EMAIL]],
      ],
    },
    support: {
      title: 'Support',
      intro: 'If the App misses an alert or a number looks wrong, email us with your iPhone model, iOS version and app version. Please hide names and account numbers in any alert text you send.',
      faq: [
        ['A payment was not recorded', 'Check, in order: Shortcuts notifications are not turned off; the bank or card app\'s notification preview is set to Always; the automation is on with Run Immediately and Allow When Locked enabled.'],
        ['I bought it but it is not active / how do I cancel', 'Tap "Restore purchases" on the purchase screen while signed in with the Apple Account you used. Cancel in iPhone Settings > your name > Subscriptions.'],
      ],
    },
  },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const linkify = (s) => esc(s).replace(/(https?:\/\/[^\s)）,，、]+)/g, '<a href="$1">$1</a>').replace(/([\w.+-]+@[\w-]+\.[\w.]+)/g, '<a href="mailto:$1">$1</a>');

function page(lang, kind) {
  const t = T[lang];
  const p = t[kind];
  const pageNav = ['privacy', 'terms', 'support'].map((k) => (k === kind ? `<strong>${t.nav[k]}</strong>` : `<a href="../${k}/">${t.nav[k]}</a>`)).join(' · ');
  const otherHref = lang === 'ko' ? `../en/${kind}/` : `../../${kind}/`;
  let body = `<h1>Kakepo · ${esc(p.title)}</h1>\n<p class="meta">${esc(t.operator)}<br>${esc(t.effective)}</p>\n<p>${linkify(p.intro)}</p>\n`;
  if (kind === 'terms') body += `<p><a href="${EULA}">${EULA}</a></p>\n`;
  if (kind === 'support') {
    body += `<p><a href="mailto:${EMAIL}">${EMAIL}</a></p>\n`;
    for (const [q, a] of p.faq) body += `<h3>${esc(q)}</h3>\n<p>${linkify(a)}</p>\n`;
  } else {
    for (const [h, items] of p.sections) body += `<h2>${esc(h)}</h2>\n<ul>\n${items.map((i) => `<li>${linkify(i)}</li>`).join('\n')}\n</ul>\n`;
  }
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)} · Kakepo · Ring</title>
<style>
body{font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Segoe UI",system-ui,sans-serif;max-width:720px;margin:0 auto;padding:24px 16px 64px;color:#1c1c1e;line-height:${lang === 'ko' ? 1.7 : 1.55};letter-spacing:0}
@media (prefers-color-scheme:dark){body{background:#000;color:#f2f2f7}a{color:#3dd39a}}
a{color:#0b6e4f}h1{font-size:1.6em;line-height:1.35}h2{font-size:1.2em;margin-top:2em}h3{font-size:1.05em;margin-top:1.5em}
nav{font-size:.9em;margin-bottom:1.5em}.meta{color:#8e8e93;font-size:.9em}ul{padding-left:1.2em}li{margin:.4em 0}
</style>
</head>
<body>
<nav><a href="${otherHref}">${t.other[0]}</a><br>${pageNav}</nav>
${body}</body>
</html>
`;
}

const out = [];
for (const lang of ['ko', 'en']) for (const kind of ['privacy', 'terms', 'support']) {
  const dir = lang === 'ko' ? join(root, 'kakepo', kind) : join(root, 'kakepo', 'en', kind);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), page(lang, kind), 'utf8');
  out.push(dir.replace(root, ''));
}
writeFileSync(join(root, 'kakepo', 'index.html'), `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Kakepo · Ring</title></head><body style="font-family:system-ui,sans-serif;max-width:720px;margin:0 auto;padding:24px 16px"><h1>Kakepo</h1><p>${T.ko.operator}</p><ul><li><a href="privacy/">개인정보 처리방침</a> · <a href="terms/">이용약관</a> · <a href="support/">문의</a></li><li><a href="en/privacy/">Privacy Policy</a> · <a href="en/terms/">Terms of Use</a> · <a href="en/support/">Support</a></li></ul></body></html>\n`, 'utf8');
console.log('wrote', out.length, 'pages');
