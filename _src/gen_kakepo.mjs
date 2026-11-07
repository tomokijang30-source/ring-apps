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
      intro: 'Kakepo(결제 알림을 받아 오늘 쓸 수 있는 돈을 계산하는 가계부 앱, 이하 「앱」)가 정보를 어떻게 다루는지 적은 문서입니다.',
      sections: [
        ['한눈에', [
          '수집하는 개인정보는 없습니다. 가입·계정·로그인이 없고, 이름·이메일·전화번호·위치·연락처·사진을 받지 않습니다.',
          '우리는 서버를 두지 않습니다. 결제 알림 원문, 기록, 잔액, 나갈 돈, 설정은 모두 사용자의 iPhone 안에만 있고, 우리에게 오지 않습니다.',
          '결제는 Apple의 StoreKit으로 하고, 구매 확인도 iPhone 안에서 합니다. 영수증과 거래 정보를 우리나 다른 회사로 보내지 않습니다.',
          '광고, 광고 SDK, 다른 회사 앱·웹사이트를 넘나드는 추적이 없고, 데이터를 팔지 않습니다.',
        ]],
        ['iPhone 안에 저장되는 것', [
          '결제 알림: 사용자가 만든 단축어가 넘겨 준 알림의 제목·본문·보낸 앱·시각. 앱은 여기서 금액·가게·카드를 읽어 기록을 만들고, 숫자를 못 읽은 알림은 원문 그대로 「못 읽은 알림」에 둡니다.',
          '기록과 계산에 쓰는 값: 잔액, 월급날, 나갈 돈, 카드 결제일, 사용자가 고른 은행·카드 이름.',
          '저장 위치: 앱 폴더와 App Group(같은 앱의 위젯·단축어 동작이 함께 쓰는 칸). 잠금화면 위젯과 단축어 동작은 이 칸의 값만 읽고 씁니다.',
          '이 데이터는 iPhone의 일반 백업에 포함됩니다. iCloud 백업이나 컴퓨터 백업을 쓰면 Apple 계정 아래에 함께 보관되며, 우리는 볼 수 없습니다.',
          '앱을 지우면 iPhone 안의 데이터도 지워집니다.',
        ]],
        ['서버와 외부 전송', [
          '앱이 우리 서버로 보내는 데이터는 없습니다.',
          '오래된 iPhone에서 쓰는 AI 문장 기능(중계)은 지금 꺼져 있습니다. 나중에 켤 때는 무엇을 보내는지 보여 주는 동의 화면을 먼저 띄우고, 동의한 경우에만 그 한 줄을 보냅니다. 이때 이 문서를 먼저 고쳐 공지합니다.',
          '사용 통계·오류 보고는 지금 판에 없습니다. 넣게 되면 동의를 먼저 묻고 이 문서를 먼저 고칩니다.',
          '은행·카드 알림을 앱으로 넘기는 일은 iPhone의 단축어 앱이 기기 안에서 합니다.',
        ]],
        ['결제', [
          'Kakepo 1년(7일 무료 체험 뒤 자동 갱신 구독)과 Kakepo 평생(한 번 결제)은 Apple이 결제를 처리합니다. 우리는 카드 정보를 보지 않습니다.',
          '구매 여부는 iPhone 안에서 StoreKit 2가 Apple 서명을 확인한 거래로만 판단합니다. 거래 정보를 다른 곳으로 보내지 않습니다.',
          'Apple의 처리 방식: https://www.apple.com/legal/privacy/',
        ]],
        ['문의 메일', [
          `${EMAIL}로 메일을 보내면 그 메일 주소와 내용을 답장하는 데만 쓰고, 답장 뒤 1년이 지나면 지웁니다.`,
        ]],
        ['사용자의 권리', [
          '우리가 가진 사용자 데이터가 없어서 열람·정정·삭제할 것이 없습니다. iPhone 안의 기록은 앱 안에서 지우거나 앱을 지우면 사라집니다.',
          `궁금한 점은 ${EMAIL}로 물어보세요. 10일 안에 답합니다.`,
        ]],
        ['아동', [
          '앱은 14세 미만을 대상으로 하지 않습니다.',
        ]],
        ['개인정보 보호책임자와 변경', [
          `개인정보 보호책임자: 링 대표, ${EMAIL}`,
          '이 문서를 바꾸면 이 페이지에 시행일과 함께 올립니다. 새로운 정보를 받게 되는 것처럼 중요한 변경은 7일 전에 알립니다.',
        ]],
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
        ['문의', [`${EMAIL}`]],
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
          'We run no servers. Payment alert text, records, balances, upcoming payments and settings stay only on your iPhone and are never sent to us.',
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
