// ring-apps 페이지 생성기(I2, 2026-10-24). 실행: node _src/gen.mjs → shiftpay/<lang>/{privacy,support,terms}/index.html
// 내용 기준: skeleton store/app-privacy.md(수집 표) + legal/privacy.md(항목 구성) + app1 SPEC v1.1 §8-2(저장 위치)·§8-5(이벤트, 금액 원값 없음).
// 운영자 '링(Ring)' 개인사업자. 문의 메일은 확정 전이라 tomokijang30@gmail.com(변경 예정).
// 앱 이름은 브랜드 확정 전이라 'Shift Pay'(en 홈 화면 이름, 가칭)로 쓴다. 브랜드가 정해지면 APP 값을 바꾸고 다시 돌린다.
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const EMAIL = 'tomokijang30@gmail.com';
const EULA = 'https://www.apple.com/legal/internet-services/itunes/appstore/dev/stdeula/';
const EFFECTIVE = '2026-10-24';
const LANGS = ['en', 'ko', 'fr', 'ja', 'zh-Hant'];
const LANG_LABEL = { en: 'English', ko: '한국어', fr: 'Français', ja: '日本語', 'zh-Hant': '繁體中文' };
const APP = { en: 'Noxshift', ko: 'Noxshift', fr: 'Noxshift', ja: 'Noxshift', 'zh-Hant': 'Noxshift' }; // 10-25 오너 확정. URL 경로 shiftpay/는 스토어 링크 유지를 위해 그대로

const T = {
  en: {
    nav: { privacy: 'Privacy Policy', support: 'Support', terms: 'Terms of Use' },
    operator: 'Operated by Ring (링), a sole proprietorship in the Republic of Korea.',
    effective: `Effective date: ${EFFECTIVE}`,
    emailNote: '(this address will change; this page will be updated)',
    privacy: {
      title: 'Privacy Policy',
      intro: `This policy explains how the ${APP.en} app (a shift calendar with an overtime pay estimate, "the App") handles your information.`,
      sections: [
        ['Summary', [
          'No sign-up, account or login. We do not collect your name, email address, phone number, location, contacts or photos.',
          'Your shifts, wage, pay settings and the amounts the App calculates are stored only on your iPhone, in the App\'s own folder. We never receive them.',
          'That folder is part of your iPhone\'s normal backup: if you use iCloud Backup or back up to a computer, the App\'s data is included. Apple keeps this backup under your Apple Account; we have no access to it. Backup files you export yourself go only where you choose (Files, iCloud Drive, email).',
          'iCloud sync (a Pro feature planned for a later version): when it is available and you turn it on, your data is synced through your own iCloud account, operated by Apple. We cannot read it.',
          'Anonymous usage statistics and error reports (PostHog) are sent only if you tap Allow. If you decline, every feature and purchase works the same. You can turn this off at any time in Settings.',
          'Purchases are handled by Apple, and purchase status is checked through RevenueCat. We never see your card details.',
          'No ads, no advertising SDKs, no tracking across other companies\' apps or websites, and we do not sell data.',
        ]],
        ['What is processed and why', [
          'Anonymous usage statistics (only if you allowed it): a random anonymous ID; a fixed set of events such as onboarding steps, the pay screen being viewed, the purchase screen being viewed and a purchase being completed; settings such as the pattern type, country rule and whether Pro is active; app version, device model, iOS version, language and approximate country derived from the IP address. Wages, pay amounts, shift times and notes are never sent. Purpose: find where people get stuck and improve the App.',
          'Error reports (only if you allowed it): error message, code location, app and iOS version. Purpose: fix crashes and bugs.',
          'Purchase status (when you buy or restore): an anonymous purchaser ID, products, subscription period, trial and renewal status, store country. Purpose: unlock Pro and restore purchases.',
          'Support email (when you write to us): your email address and message. Purpose: answer you.',
        ]],
        ['Service providers and international transfer', [
          'PostHog, Inc. (United States): stores and analyses anonymous usage statistics and error reports, sent over encrypted connections while you use the App, only if you allowed it. Policy: https://posthog.com/privacy',
          'RevenueCat, Inc. (United States): checks and restores purchase status, when you buy or restore. Policy: https://www.revenuecat.com/privacy',
          'Apple Inc.: payments, App Store distribution, iCloud Backup and iCloud sync under your Apple Account. Policy: https://www.apple.com/legal/privacy/',
          'To stop anonymous statistics and error reports from leaving your iPhone, turn the switch off in Settings. Purchase status is needed for paid features.',
        ]],
        ['Retention and deletion', [
          'Anonymous usage statistics and error reports: deleted after at most 1 year.',
          'Purchase status: kept while your purchase or subscription is active and for any period required by law (for example, 5 years for payment records under Korean consumer protection law).',
          'Support emails: deleted 1 year after we reply.',
          'Data on your iPhone is deleted when you delete the App. Backups made by you or by your iPhone stay where they are until you delete them.',
        ]],
        ['Your rights', [
          `You can ask to access, correct, delete or stop the processing of your data by emailing ${EMAIL}. We answer within 10 days. Because statistics are stored only under a random ID, we may not be able to find data we cannot link to you.`,
          'Subscriptions are cancelled and refunded through Apple: iPhone Settings > your name > Subscriptions; refunds at https://reportaproblem.apple.com',
        ]],
        ['Children and security', [
          'The App is not directed to children under 14 and we do not knowingly collect their data.',
          'We use encrypted transfer (HTTPS), least-privilege access with two-factor authentication on provider accounts, and collect only what we need.',
        ]],
        ['Contact and changes', [
          `Privacy contact: the representative of Ring, ${EMAIL}`,
          'If we change this policy, we post the new version here with its effective date. Important changes, such as collecting a new kind of data, are announced at least 7 days in advance.',
        ]],
      ],
    },
    support: {
      title: 'Support',
      intro: `Questions or problems with ${APP.en}? Email us. Please include your iPhone model, iOS version and app version, and a screenshot if you can. You can write in English, French, Korean, Japanese or Chinese.`,
      faqTitle: 'Frequently asked questions',
      faq: [
        ['Why is the estimate different from my payslip?', 'By default the App uses the general statutory rules of your country and work setup. Public-sector rules, averaged-hours schemes, collective agreements and company rules can differ. The amounts are pre-tax estimates for guidance only, not legal advice. Open Pay settings and change the hours and percentages to match your contract.'],
        ['I bought Pro but it is not showing. How do I cancel?', 'Tap Settings > Restore Purchases while signed in with the Apple Account you used to buy. To cancel a subscription, open Settings > Manage Subscription (or iPhone Settings > your name > Subscriptions). You keep access until the end of the period you paid for.'],
        ['Will my shifts carry over to a new iPhone?', 'Yes, if you move to the new iPhone from an iCloud Backup or a computer backup (or with Quick Start): the App\'s data is part of that backup. You can also save a backup file (Settings > Backup > Save) and open it in the App on the new iPhone. We keep no copy of your data, so without either one it cannot be recovered.'],
      ],
    },
    terms: {
      title: 'Terms of Use',
      intro: `Your use of ${APP.en} is governed by Apple's Standard Licensed Application End User License Agreement (Standard EULA):`,
      sections: [
        ['Subscriptions and payment', [
          'Pro is available as an auto-renewable subscription (yearly, with a free trial for eligible users, or monthly where offered) or as a one-time lifetime purchase. Prices are shown on the purchase screen and in the App Store and may vary by country.',
          'If a free trial is offered, the yearly price is charged when the trial ends unless you cancel at least 24 hours before. Apple decides trial eligibility.',
          'Payment is charged to your Apple Account when you confirm the purchase. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period.',
          'Manage or cancel: iPhone Settings > your name > Subscriptions. Refunds are requested from Apple: https://reportaproblem.apple.com',
          'On a new iPhone or after reinstalling, use Settings > Restore Purchases with the same Apple Account.',
        ]],
        ['Estimates, not advice', [
          'Pay amounts in the App are pre-tax estimates based on general rules and the values you enter. They are for guidance only and are not legal, tax or employment advice. Your contract, collective agreement or employer may apply other rules.',
        ]],
      ],
    },
  },
  ko: {
    nav: { privacy: '개인정보처리방침', support: '지원', terms: '이용약관' },
    operator: '운영자: 링(Ring), 대한민국 개인사업자',
    effective: `시행일: ${EFFECTIVE}`,
    emailNote: '(변경 예정 주소이며, 바뀌면 이 페이지를 고칩니다)',
    privacy: {
      title: '개인정보처리방침',
      intro: `링(Ring, 이하 "운영자")은 ${APP.ko} 앱(교대 근무표와 초과근무 수당 추정, 이하 "앱")을 운영하며 「개인정보 보호법」 등 관련 법령을 지킵니다. 이 방침은 앱이 정보를 어떻게 처리하는지 알려 드립니다.`,
      sections: [
        ['1. 요약', [
          '회원가입·계정·로그인이 없습니다. 이름·이메일·전화번호·위치·연락처·사진을 수집하지 않습니다.',
          '근무표·시급·급여 설정과 앱이 계산한 금액은 이 iPhone 안(앱 전용 폴더)에만 저장되며 운영자는 받지 않습니다.',
          '이 폴더는 iPhone의 일반 백업에 들어갑니다. iCloud 백업이나 컴퓨터 백업을 켜 두었다면 앱 데이터도 함께 백업됩니다. 이 백업은 Apple이 이용자의 Apple 계정 아래 보관하며 운영자는 볼 수 없습니다. 이용자가 직접 내보낸 백업 파일은 이용자가 고른 곳(파일 앱·iCloud Drive·메일)에만 있습니다.',
          'iCloud 동기화(다음 버전에 넣을 Pro 기능): 제공된 뒤 이용자가 켜면, 데이터는 Apple이 운영하는 이용자 본인의 iCloud 계정으로 동기화됩니다. 운영자는 읽을 수 없습니다.',
          '익명 사용 기록과 오류 기록(PostHog)은 이용자가 [허용]을 누른 경우에만 보냅니다. 거절해도 모든 기능과 결제가 똑같이 동작하며, 설정에서 언제든 끌 수 있습니다.',
          '결제는 Apple이 처리하고, 구매 상태는 RevenueCat으로 확인합니다. 운영자는 카드 정보를 받지 않습니다.',
          '광고·광고 SDK·다른 회사 앱/웹사이트를 넘나드는 추적이 없고, 정보를 팔지 않습니다.',
        ]],
        ['2. 처리 항목과 목적', [
          '익명 사용 기록(허용한 경우만): 무작위 익명 ID, 정해진 이벤트(온보딩 단계, 급여 화면 열람, 결제 화면 열람, 결제 완료 등)와 그 설정값(패턴 종류, 나라 규칙, Pro 여부 등), 앱 버전, 기기 모델, iOS 버전, 언어, 접속 IP로 추정한 국가. 시급·금액·근무 시각·메모는 절대 보내지 않습니다. 목적: 이용자가 막히는 곳을 찾아 앱을 고침.',
          '오류 기록(허용한 경우만): 오류 메시지, 코드 위치, 앱·iOS 버전. 목적: 오류 수정.',
          '구매 상태(구매·복원할 때): 익명 구매자 ID, 상품, 구독 기간, 체험·갱신 상태, 스토어 국가. 목적: Pro 기능 열기와 구매 복원.',
          '문의 메일(이용자가 보낼 때): 이메일 주소와 내용. 목적: 답변.',
        ]],
        ['3. 처리 위탁과 국외 이전', [
          'PostHog, Inc.(미국): 익명 사용 기록·오류 기록 저장과 분석. 앱 사용 중 수시로, 암호화된 인터넷 전송으로, 허용한 경우에만 이전됩니다. 보유: 아래 4절. 방침: https://posthog.com/privacy',
          'RevenueCat, Inc.(미국): 구매 상태 확인·복원. 구매·복원할 때 암호화 전송으로 이전됩니다. 방침: https://www.revenuecat.com/privacy',
          'Apple Inc.(미국 등): 결제, App Store 배포, 이용자 Apple 계정 아래의 iCloud 백업·iCloud 동기화. 방침: https://www.apple.com/legal/privacy/',
          '국외 이전을 원하지 않으면 설정에서 익명 사용 기록 스위치를 끄면 됩니다. 구매 상태는 유료 기능에 꼭 필요합니다.',
        ]],
        ['4. 보유 기간과 파기', [
          '익명 사용 기록·오류 기록: 최대 1년 보관 뒤 삭제합니다.',
          '구매 상태: 구매·구독이 유지되는 동안과 법령이 정한 기간(「전자상거래 등에서의 소비자보호에 관한 법률」 대금 결제·재화 공급 기록 5년 등) 동안 보관합니다.',
          '문의 메일: 답변 후 1년 보관하고 삭제합니다.',
          'iPhone 안의 데이터는 앱을 삭제하면 지워집니다. 이용자나 iPhone이 만든 백업은 이용자가 지울 때까지 그 자리에 남습니다.',
          '파기 방법: 전자 파일은 복구할 수 없게 삭제합니다. 종이 기록은 두지 않습니다.',
        ]],
        ['5. 이용자의 권리', [
          `개인정보 열람·정정·삭제·처리정지를 ${EMAIL}로 요청할 수 있으며 10일 이내에 처리합니다. 익명 ID로만 저장된 기록은 이용자를 특정할 수 없어 찾기 어려울 수 있습니다.`,
          '구독 해지·환불은 Apple을 통해 합니다: iPhone 설정 > 내 이름 > 구독, 환불 https://reportaproblem.apple.com',
        ]],
        ['6. 아동, 안전성 확보 조치', [
          '앱은 만 14세 미만 아동을 대상으로 하지 않으며 아동의 정보를 알고서 수집하지 않습니다.',
          '전송 구간 암호화(HTTPS), 수탁사 계정 접근 최소화·2단계 인증, 필요한 항목만 수집합니다. 쿠키를 쓰지 않습니다.',
        ]],
        ['7. 개인정보 보호책임자와 문의, 권익 침해 구제', [
          `개인정보 보호책임자: 링(Ring) 대표, ${EMAIL}`,
          '개인정보침해신고센터(privacy.kisa.or.kr, 국번 없이 118), 개인정보분쟁조정위원회(www.kopico.go.kr, 1833-6972), 대검찰청(www.spo.go.kr, 1301), 경찰청(ecrm.police.go.kr, 182)',
        ]],
        ['8. 방침의 변경', [
          '방침을 바꾸면 이 페이지에 시행일과 함께 알립니다. 수집 항목이 늘어나는 등 중요한 변경은 시행 7일 전에 알립니다.',
        ]],
      ],
    },
    support: {
      title: '지원',
      intro: `${APP.ko} 사용 중 궁금한 점이나 문제가 있으면 메일을 보내 주세요. iPhone 모델, iOS 버전, 앱 버전과 가능하면 화면 캡처를 함께 보내 주시면 빨리 확인할 수 있어요. 한국어·영어·프랑스어·일본어·중국어로 쓰셔도 됩니다.`,
      faqTitle: '자주 묻는 질문',
      faq: [
        ['급여명세서와 금액이 달라요.', '기본값은 나라별 일반 법정 규정(한국은 근로기준법, 상시 5명 이상 사업장)이에요. 공무원·탄력적 근로시간제·5명 미만 사업장·단체협약·회사 규정은 다를 수 있고, 앱의 금액은 법률 자문이 아닌 세전 참고용 추정이에요. 급여 설정에서 기준 시간과 %를 계약에 맞게 바꿔 주세요.'],
        ['Pro를 샀는데 적용이 안 돼요. 해지는 어떻게 하나요?', '구매할 때 쓴 Apple 계정으로 로그인한 상태에서 설정 > 구매 복원을 눌러 주세요. 구독 해지는 설정 > 구독 관리(또는 iPhone 설정 > 내 이름 > 구독)에서 할 수 있고, 결제한 기간이 끝날 때까지 쓸 수 있어요.'],
        ['폰을 바꾸면 근무표가 이어지나요?', '네. 새 iPhone을 iCloud 백업이나 컴퓨터 백업에서 복원하거나 빠른 시작으로 옮기면 앱 데이터도 함께 옮겨져요. 또는 설정 > 백업 > 저장으로 백업 파일을 만들어 새 iPhone의 앱에서 불러오면 돼요. 운영자는 데이터 사본을 갖고 있지 않아서, 둘 다 없으면 되살릴 수 없어요.'],
      ],
    },
    terms: {
      title: '이용약관',
      intro: `${APP.ko} 앱의 이용에는 Apple 표준 최종 사용자 사용권 계약(Standard EULA)이 적용됩니다:`,
      sections: [
        ['구독과 결제 안내', [
          'Pro는 자동 갱신 구독(연간: 대상자에게 무료 체험 제공, 월간: 제공하는 경우) 또는 한 번 결제하는 평생 이용권으로 이용할 수 있습니다. 가격은 결제 화면과 App Store에 표시되며 나라마다 다를 수 있습니다.',
          '무료 체험이 있는 경우, 끝나기 24시간 전까지 해지하지 않으면 체험이 끝날 때 연간 요금이 청구됩니다. 체험 대상 여부는 Apple이 정합니다.',
          '결제는 구매를 확인할 때 Apple 계정으로 청구됩니다. 구독은 현재 기간이 끝나기 최소 24시간 전에 해지하지 않으면 자동으로 갱신됩니다.',
          '구독 관리·해지: iPhone 설정 > 내 이름 > 구독. 환불은 Apple에 요청합니다: https://reportaproblem.apple.com',
          '기기를 바꾸거나 다시 설치하면 같은 Apple 계정으로 설정 > 구매 복원을 누르세요.',
        ]],
        ['추정치 안내', [
          '앱의 금액은 일반 규정과 이용자가 넣은 값으로 계산한 세전 추정치이며, 법률·세무·노무 자문이 아닙니다. 계약·단체협약·회사 규정에 따라 다를 수 있습니다.',
        ]],
      ],
    },
  },
  fr: {
    nav: { privacy: 'Politique de confidentialité', support: 'Assistance', terms: 'Conditions d\'utilisation' },
    operator: 'Éditeur : Ring (링), entreprise individuelle, République de Corée.',
    effective: `Date d'entrée en vigueur : ${EFFECTIVE}`,
    emailNote: '(adresse provisoire ; cette page sera mise à jour)',
    privacy: {
      title: 'Politique de confidentialité',
      intro: `Cette politique explique comment l'app ${APP.fr} (planning de travail en équipe avec estimation des heures supplémentaires, « l'app ») traite vos informations.`,
      sections: [
        ['En bref', [
          'Pas d\'inscription, de compte ni de connexion. Nous ne collectons ni nom, ni e-mail, ni numéro de téléphone, ni position, ni contacts, ni photos.',
          'Votre planning, votre taux horaire, vos réglages de paie et les montants calculés restent uniquement sur votre iPhone, dans le dossier propre à l\'app. Nous ne les recevons jamais.',
          'Ce dossier fait partie de la sauvegarde normale de votre iPhone : si vous utilisez la sauvegarde iCloud ou une sauvegarde sur ordinateur, les données de l\'app y sont incluses. Apple conserve cette sauvegarde sous votre compte Apple ; nous n\'y avons pas accès. Les fichiers de sauvegarde que vous exportez vont uniquement là où vous le décidez (Fichiers, iCloud Drive, e-mail).',
          'Synchronisation iCloud (fonction Pro prévue dans une version ultérieure) : lorsqu\'elle sera disponible et que vous l\'activerez, vos données seront synchronisées via votre propre compte iCloud, géré par Apple. Nous ne pouvons pas les lire.',
          'Les statistiques d\'utilisation anonymes et les rapports d\'erreur (PostHog) ne sont envoyés que si vous touchez Autoriser. Si vous refusez, toutes les fonctions et tous les achats marchent de la même façon. Vous pouvez désactiver cet envoi à tout moment dans les Réglages.',
          'Les paiements sont traités par Apple et le statut d\'achat est vérifié via RevenueCat. Nous ne voyons jamais vos données bancaires.',
          'Pas de publicité, pas de SDK publicitaire, pas de suivi entre les apps ou sites d\'autres sociétés, aucune vente de données.',
        ]],
        ['Données traitées et finalités', [
          'Statistiques d\'utilisation anonymes (seulement si vous l\'avez accepté) : un identifiant anonyme aléatoire ; une liste fixe d\'événements (étapes d\'accueil, ouverture de l\'écran de paie, de l\'écran d\'achat, achat effectué…) ; des réglages comme le type de cycle, la règle du pays et l\'activation de Pro ; version de l\'app, modèle d\'appareil, version d\'iOS, langue et pays approximatif déduit de l\'adresse IP. Le taux horaire, les montants, les horaires et les notes ne sont jamais envoyés. Finalité : repérer où les utilisateurs bloquent et améliorer l\'app.',
          'Rapports d\'erreur (seulement si vous l\'avez accepté) : message d\'erreur, emplacement dans le code, versions de l\'app et d\'iOS. Finalité : corriger les erreurs.',
          'Statut d\'achat (lors d\'un achat ou d\'une restauration) : identifiant d\'acheteur anonyme, produits, période d\'abonnement, essai et renouvellement, pays de la boutique. Finalité : débloquer Pro et restaurer les achats.',
          'E-mails d\'assistance (si vous nous écrivez) : votre adresse e-mail et votre message. Finalité : vous répondre.',
        ]],
        ['Prestataires et transferts hors UE', [
          'PostHog, Inc. (États-Unis) : stockage et analyse des statistiques anonymes et des rapports d\'erreur, envoyés de façon chiffrée pendant l\'utilisation, uniquement si vous l\'avez accepté. Politique : https://posthog.com/privacy',
          'RevenueCat, Inc. (États-Unis) : vérification et restauration du statut d\'achat. Politique : https://www.revenuecat.com/privacy',
          'Apple Inc. : paiements, distribution sur l\'App Store, sauvegarde iCloud et synchronisation iCloud sous votre compte Apple. Politique : https://www.apple.com/legal/privacy/',
          'Pour empêcher l\'envoi des statistiques et des rapports d\'erreur, désactivez l\'option dans les Réglages. Le statut d\'achat est nécessaire aux fonctions payantes.',
        ]],
        ['Durée de conservation', [
          'Statistiques anonymes et rapports d\'erreur : supprimés au plus tard au bout d\'un an.',
          'Statut d\'achat : conservé tant que l\'achat ou l\'abonnement est actif et pendant la durée imposée par la loi (par exemple 5 ans pour les justificatifs de paiement en droit coréen de la consommation).',
          'E-mails d\'assistance : supprimés un an après notre réponse.',
          'Les données sur votre iPhone sont supprimées avec l\'app. Les sauvegardes faites par vous ou par votre iPhone restent là où elles sont jusqu\'à ce que vous les supprimiez.',
        ]],
        ['Vos droits', [
          `Vous pouvez demander l'accès, la rectification, l'effacement ou la limitation du traitement de vos données en écrivant à ${EMAIL}. Nous répondons sous 10 jours. Les statistiques n'étant liées qu'à un identifiant aléatoire, nous pouvons ne pas retrouver des données impossibles à relier à vous. Vous pouvez aussi saisir l'autorité de protection des données de votre pays (en France, la CNIL).`,
          'Les abonnements se résilient et se remboursent via Apple : Réglages de l\'iPhone > votre nom > Abonnements ; remboursements sur https://reportaproblem.apple.com',
        ]],
        ['Enfants et sécurité', [
          'L\'app ne s\'adresse pas aux enfants de moins de 15 ans et nous ne collectons pas sciemment leurs données.',
          'Transferts chiffrés (HTTPS), accès minimal avec double authentification sur les comptes des prestataires, collecte limitée au nécessaire.',
        ]],
        ['Contact et modifications', [
          `Contact confidentialité : le représentant de Ring, ${EMAIL}`,
          'En cas de modification, la nouvelle version est publiée ici avec sa date d\'entrée en vigueur. Les changements importants (nouvelle catégorie de données, par exemple) sont annoncés au moins 7 jours à l\'avance.',
        ]],
      ],
    },
    support: {
      title: 'Assistance',
      intro: `Une question ou un problème avec ${APP.fr} ? Écrivez-nous. Indiquez si possible le modèle d'iPhone, la version d'iOS et celle de l'app, avec une capture d'écran. Vous pouvez écrire en français, en anglais, en coréen, en japonais ou en chinois.`,
      faqTitle: 'Questions fréquentes',
      faq: [
        ['Pourquoi l\'estimation est-elle différente de ma fiche de paie ?', 'Par défaut, l\'app applique les règles légales générales de votre pays et de votre situation (en France, le régime général du Code du travail). La fonction publique hospitalière, la modulation du temps de travail, votre convention collective ou votre entreprise peuvent prévoir d\'autres règles. Les montants sont des estimations brutes, à titre indicatif, et ne constituent pas un conseil juridique. Modifiez les seuils et les taux dans Réglages de paie.'],
        ['J\'ai acheté Pro mais il n\'apparaît pas. Comment résilier ?', 'Touchez Réglages > Restaurer les achats, connecté avec le compte Apple utilisé pour l\'achat. Pour résilier, ouvrez Réglages > Gérer l\'abonnement (ou Réglages de l\'iPhone > votre nom > Abonnements). L\'accès reste ouvert jusqu\'à la fin de la période payée.'],
        ['Mon planning me suit-il sur un nouvel iPhone ?', 'Oui, si vous configurez le nouvel iPhone à partir d\'une sauvegarde iCloud ou d\'une sauvegarde sur ordinateur (ou avec Démarrage rapide) : les données de l\'app font partie de cette sauvegarde. Vous pouvez aussi enregistrer un fichier de sauvegarde (Réglages > Sauvegarde > Enregistrer) et l\'ouvrir dans l\'app sur le nouvel iPhone. Nous ne gardons aucune copie de vos données : sans l\'un ou l\'autre, elles ne peuvent pas être récupérées.'],
      ],
    },
    terms: {
      title: 'Conditions d\'utilisation',
      intro: `L'utilisation de ${APP.fr} est régie par le contrat de licence standard d'Apple pour les utilisateurs finaux (Standard EULA) :`,
      sections: [
        ['Abonnements et paiement', [
          'Pro est proposé en abonnement à renouvellement automatique (annuel, avec un essai gratuit pour les personnes éligibles, ou mensuel lorsqu\'il est proposé) ou en achat unique à vie. Les prix sont affichés sur l\'écran d\'achat et dans l\'App Store et peuvent varier selon le pays.',
          'Si un essai gratuit est proposé, le prix annuel est facturé à la fin de l\'essai, sauf résiliation au moins 24 heures avant. Apple décide de l\'éligibilité à l\'essai.',
          'Le paiement est débité sur votre compte Apple à la confirmation de l\'achat. L\'abonnement se renouvelle automatiquement sauf résiliation au moins 24 heures avant la fin de la période en cours.',
          'Gérer ou résilier : Réglages de l\'iPhone > votre nom > Abonnements. Les remboursements se demandent à Apple : https://reportaproblem.apple.com',
          'Sur un nouvel iPhone ou après réinstallation, utilisez Réglages > Restaurer les achats avec le même compte Apple.',
        ]],
        ['Estimations, pas de conseil', [
          'Les montants affichés sont des estimations brutes calculées à partir de règles générales et des valeurs que vous saisissez. Ils sont indicatifs et ne constituent pas un conseil juridique, fiscal ou social. Votre contrat, votre convention collective ou votre employeur peuvent appliquer d\'autres règles.',
        ]],
      ],
    },
  },
  ja: {
    nav: { privacy: 'プライバシーポリシー', support: 'サポート', terms: '利用規約' },
    operator: '運営者：Ring（링）、大韓民国の個人事業者',
    effective: `施行日：${EFFECTIVE}`,
    emailNote: '（変更予定のアドレスです。変わった場合はこのページを更新します）',
    privacy: {
      title: 'プライバシーポリシー',
      intro: `このポリシーは、${APP.ja} アプリ（シフト表と残業代の目安計算、以下「本アプリ」）が情報をどのように扱うかを説明します。`,
      sections: [
        ['概要', [
          '会員登録・アカウント・ログインはありません。氏名・メールアドレス・電話番号・位置情報・連絡先・写真は収集しません。',
          'シフト・時給・給与設定と本アプリが計算した金額は、このiPhoneの中（本アプリ専用のフォルダ）にだけ保存され、運営者は受け取りません。',
          'このフォルダはiPhoneの通常のバックアップに含まれます。iCloudバックアップやコンピュータへのバックアップを使っている場合、本アプリのデータも一緒にバックアップされます。このバックアップはAppleがお客様のApple Accountの下で保管し、運営者は見ることができません。お客様が書き出したバックアップファイルは、お客様が選んだ場所（ファイル・iCloud Drive・メール）にだけ保存されます。',
          'iCloud同期（今後のバージョンで追加予定のPro機能）：提供後にオンにすると、データはAppleが運営するお客様ご自身のiCloudアカウントで同期されます。運営者は読むことができません。',
          '匿名の利用統計とエラー報告（PostHog）は、お客様が［許可］を押した場合にだけ送信されます。拒否してもすべての機能と購入は同じように動作し、設定からいつでもオフにできます。',
          '支払いはAppleが処理し、購入状況はRevenueCatで確認します。運営者がカード情報を見ることはありません。',
          '広告・広告SDK・他社のアプリやウェブサイトをまたぐトラッキングはなく、データを販売しません。',
        ]],
        ['取り扱う情報と目的', [
          '匿名の利用統計（許可した場合のみ）：ランダムな匿名ID、決められたイベント（オンボーディングの段階、給与画面・購入画面の表示、購入完了など）とその設定値（パターンの種類、国のルール、Proの有無など）、アプリのバージョン、機種、iOSのバージョン、言語、IPアドレスから推定した国。時給・金額・勤務時刻・メモは送信しません。目的：つまずく箇所を見つけて本アプリを改善するため。',
          'エラー報告（許可した場合のみ）：エラーメッセージ、コードの位置、アプリとiOSのバージョン。目的：不具合の修正。',
          '購入状況（購入・復元時）：匿名の購入者ID、商品、サブスクリプション期間、トライアル・更新の状態、ストアの国。目的：Pro機能の解放と購入の復元。',
          'お問い合わせメール（送信時）：メールアドレスと内容。目的：返信のため。',
        ]],
        ['委託先と国外移転', [
          'PostHog, Inc.（米国）：匿名の利用統計・エラー報告の保存と分析。許可した場合にのみ、利用中に暗号化通信で送信されます。ポリシー：https://posthog.com/privacy',
          'RevenueCat, Inc.（米国）：購入状況の確認と復元。ポリシー：https://www.revenuecat.com/privacy',
          'Apple Inc.：支払い、App Storeでの配信、お客様のApple AccountでのiCloudバックアップ・iCloud同期。ポリシー：https://www.apple.com/legal/privacy/',
          '利用統計とエラー報告を送りたくない場合は、設定のスイッチをオフにしてください。購入状況は有料機能に必要です。',
        ]],
        ['保存期間と削除', [
          '匿名の利用統計・エラー報告：最長1年で削除します。',
          '購入状況：購入・サブスクリプションが有効な間と、法令で定められた期間（韓国の消費者保護法による決済記録5年など）保存します。',
          'お問い合わせメール：返信後1年で削除します。',
          'iPhone内のデータは本アプリを削除すると消えます。お客様やiPhoneが作成したバックアップは、お客様が削除するまでそのまま残ります。',
        ]],
        ['お客様の権利', [
          `ご自身の情報の開示・訂正・削除・利用停止は ${EMAIL} までご連絡ください。10日以内に対応します。統計はランダムなIDでのみ保存されるため、お客様と結び付けられない情報は特定できない場合があります。`,
          'サブスクリプションの解約・返金はAppleで行います：iPhoneの設定 > ユーザ名 > サブスクリプション、返金は https://reportaproblem.apple.com',
        ]],
        ['お子様と安全管理', [
          '本アプリは14歳未満のお子様を対象としておらず、お子様の情報を故意に収集しません。',
          '通信の暗号化（HTTPS）、委託先アカウントの最小権限と2段階認証、必要な項目だけの収集を行います。',
        ]],
        ['お問い合わせと変更', [
          `個人情報に関する窓口：Ring代表者、${EMAIL}`,
          'ポリシーを変更した場合は、このページに施行日とともに掲載します。新しい種類の情報を集めるなど重要な変更は、7日以上前にお知らせします。',
        ]],
      ],
    },
    support: {
      title: 'サポート',
      intro: `${APP.ja} についてのご質問や不具合はメールでお知らせください。iPhoneの機種、iOSのバージョン、アプリのバージョンと、できればスクリーンショットを添えてください。日本語・英語・韓国語・フランス語・中国語で受け付けます。`,
      faqTitle: 'よくある質問',
      faq: [
        ['給与明細と金額が違うのはなぜですか？', '初期設定は国ごとの一般的な法定ルール（日本は労働基準法）です。公務員、変形労働時間制、就業規則や労使協定では異なる場合があります。金額は税引前の目安で、法律上の助言ではありません。給与設定で基準時間と割増率を契約に合わせて変更してください。'],
        ['Proを購入したのに反映されません。解約は？', '購入時のApple Accountでサインインした状態で、設定 > 購入を復元 を押してください。解約は 設定 > サブスクリプションの管理（またはiPhoneの設定 > ユーザ名 > サブスクリプション）から行えます。支払い済みの期間が終わるまで使えます。'],
        ['機種変更してもシフトは引き継げますか？', 'はい。新しいiPhoneをiCloudバックアップやコンピュータのバックアップから復元するか、クイックスタートで移行すると、本アプリのデータも引き継がれます。または 設定 > バックアップ > 保存 でバックアップファイルを作り、新しいiPhoneのアプリで読み込んでください。運営者はデータのコピーを持っていないため、どちらもない場合は復元できません。'],
      ],
    },
    terms: {
      title: '利用規約',
      intro: `${APP.ja} の利用には、Appleの標準使用許諾契約（Standard EULA）が適用されます：`,
      sections: [
        ['サブスクリプションと支払い', [
          'Proは自動更新サブスクリプション（年額：対象の方には無料トライアルあり、月額：提供している場合）または買い切りで利用できます。価格は購入画面とApp Storeに表示され、国によって異なる場合があります。',
          '無料トライアルがある場合、終了の24時間前までに解約しないと、トライアル終了時に年額料金が請求されます。トライアルの対象かどうかはAppleが決めます。',
          '支払いは購入の確定時にApple Accountに請求されます。サブスクリプションは、現在の期間が終わる24時間前までに解約しない限り自動で更新されます。',
          '管理・解約：iPhoneの設定 > ユーザ名 > サブスクリプション。返金はAppleに申請します：https://reportaproblem.apple.com',
          '機種変更や再インストールの後は、同じApple Accountで 設定 > 購入を復元 を押してください。',
        ]],
        ['金額は目安です', [
          '本アプリの金額は、一般的なルールとお客様が入力した値から計算した税引前の目安で、法律・税務・労務の助言ではありません。契約や就業規則によって異なる場合があります。',
        ]],
      ],
    },
  },
  'zh-Hant': {
    nav: { privacy: '隱私權政策', support: '客服支援', terms: '使用條款' },
    operator: '營運者：Ring（링），大韓民國個人事業',
    effective: `生效日期：${EFFECTIVE}`,
    emailNote: '（此信箱之後會更換，屆時會更新本頁）',
    privacy: {
      title: '隱私權政策',
      intro: `本政策說明 ${APP['zh-Hant']} App（輪班班表與加班費估算，以下稱「本 App」）如何處理你的資訊。`,
      sections: [
        ['摘要', [
          '不需要註冊、帳號或登入。我們不收集姓名、電子郵件、電話、位置、聯絡人或照片。',
          '班表、時薪、薪資設定與本 App 算出的金額，只存在這支 iPhone 裡（本 App 專用的資料夾），我們不會收到。',
          '這個資料夾屬於 iPhone 一般備份的一部分：如果你開啟 iCloud 備份或備份到電腦，本 App 的資料也會一起備份。這份備份由 Apple 存放在你的 Apple 帳號下，我們無法存取。你自己匯出的備份檔只會存在你選擇的位置（檔案 App、iCloud 雲碟、電子郵件）。',
          'iCloud 同步（之後版本預計加入的 Pro 功能）：推出後若你開啟，資料會透過 Apple 營運、屬於你自己的 iCloud 帳號同步。我們無法讀取。',
          '匿名使用統計與錯誤報告（PostHog）只有在你按下「允許」時才會傳送。拒絕的話，所有功能與購買都照常運作，也可以隨時在設定中關閉。',
          '付款由 Apple 處理，購買狀態透過 RevenueCat 確認。我們不會看到你的卡片資料。',
          '沒有廣告、廣告 SDK，也不會跨其他公司的 App 或網站追蹤你，更不販售資料。',
        ]],
        ['處理的資料與目的', [
          '匿名使用統計（僅在你同意時）：隨機匿名 ID、固定的事件（新手引導步驟、開啟薪資畫面、開啟購買畫面、完成購買等）及其設定值（班表類型、國家規則、是否為 Pro 等）、App 版本、裝置型號、iOS 版本、語言、由 IP 推估的國家。絕不傳送時薪、金額、上班時間或備註。目的：找出使用者卡住的地方並改善本 App。',
          '錯誤報告（僅在你同意時）：錯誤訊息、程式位置、App 與 iOS 版本。目的：修正錯誤。',
          '購買狀態（購買或恢復購買時）：匿名購買者 ID、商品、訂閱期間、試用與續訂狀態、商店國家。目的：開啟 Pro 功能與恢復購買。',
          '客服信件（你來信時）：你的電子郵件地址與內容。目的：回覆你。',
        ]],
        ['委託處理與跨境傳輸', [
          'PostHog, Inc.（美國）：儲存與分析匿名使用統計和錯誤報告，僅在你同意時，於使用中以加密連線傳送。政策：https://posthog.com/privacy',
          'RevenueCat, Inc.（美國）：確認與恢復購買狀態。政策：https://www.revenuecat.com/privacy',
          'Apple Inc.：付款、App Store 發行，以及你 Apple 帳號下的 iCloud 備份與 iCloud 同步。政策：https://www.apple.com/legal/privacy/',
          '不想傳送使用統計與錯誤報告，請在設定中關閉開關。購買狀態是付費功能所必需。',
        ]],
        ['保存期間與刪除', [
          '匿名使用統計與錯誤報告：最長保存 1 年後刪除。',
          '購買狀態：在購買或訂閱有效期間，以及法律規定的期間內保存（例如韓國消費者保護法規定付款紀錄保存 5 年）。',
          '客服信件：回覆後 1 年刪除。',
          'iPhone 裡的資料會在刪除本 App 時一起刪除。你或 iPhone 建立的備份會留在原處，直到你自行刪除。',
        ]],
        ['你的權利', [
          `你可以寄信到 ${EMAIL}，要求查閱、更正、刪除或停止處理你的資料，我們會在 10 天內處理。因統計只以隨機 ID 保存，無法與你連結的資料可能無法找出。`,
          '訂閱的取消與退款請透過 Apple：iPhone 設定 > 你的名字 > 訂閱；退款請至 https://reportaproblem.apple.com',
        ]],
        ['兒童與安全措施', [
          '本 App 並非以未滿 14 歲的兒童為對象，我們不會在知情下收集兒童資料。',
          '傳輸加密（HTTPS）、委託廠商帳號最小權限與兩步驟驗證，只收集必要的項目。',
        ]],
        ['聯絡方式與政策變更', [
          `個資聯絡窗口：Ring 代表人，${EMAIL}`,
          '政策若有變更，會在本頁公告新版本與生效日期。收集新類型資料等重大變更，會在生效至少 7 天前公告。',
        ]],
      ],
    },
    support: {
      title: '客服支援',
      intro: `使用 ${APP['zh-Hant']} 有問題嗎？請寄信給我們。附上 iPhone 型號、iOS 版本、App 版本，能附截圖更好。可以用中文、英文、韓文、日文或法文來信。`,
      faqTitle: '常見問題',
      faq: [
        ['為什麼和薪資單不一樣？', '預設使用各國一般法定規定（台灣為勞基法）。變形工時、公部門、公司規定或勞資協議可能不同；金額是稅前估算，僅供參考，並非法律意見。請到「薪資設定」依你的契約修改時數與倍率。'],
        ['買了 Pro 但沒有生效？要怎麼取消？', '請用購買時的 Apple 帳號登入，到 設定 > 恢復購買。取消訂閱請到 設定 > 管理訂閱（或 iPhone 設定 > 你的名字 > 訂閱），已付費的期間結束前仍可使用。'],
        ['換新手機，班表會跟著過去嗎？', '會。用 iCloud 備份或電腦備份回復新 iPhone，或用「快速開始」轉移，本 App 的資料也會一起過去。也可以在 設定 > 備份 > 儲存 建立備份檔，再到新 iPhone 的 App 裡讀取。我們沒有保留你的資料副本，兩者都沒有的話就無法還原。'],
      ],
    },
    terms: {
      title: '使用條款',
      intro: `使用 ${APP['zh-Hant']} 適用 Apple 標準使用者授權合約（Standard EULA）：`,
      sections: [
        ['訂閱與付款', [
          'Pro 可透過自動續訂的訂閱（年訂閱：符合資格者有免費試用；月訂閱：有提供時）或一次買斷取得。價格顯示在購買畫面與 App Store，各國可能不同。',
          '若有免費試用，除非在結束前至少 24 小時取消，否則試用結束時會收取年費。是否符合試用資格由 Apple 決定。',
          '確認購買時會向你的 Apple 帳號收費。除非在本期結束前至少 24 小時取消，訂閱會自動續訂。',
          '管理或取消：iPhone 設定 > 你的名字 > 訂閱。退款請向 Apple 申請：https://reportaproblem.apple.com',
          '換新 iPhone 或重新安裝後，請用同一個 Apple 帳號到 設定 > 恢復購買。',
        ]],
        ['金額為估算', [
          '本 App 的金額是依一般規定與你輸入的數值算出的稅前估算，僅供參考，並非法律、稅務或勞動諮詢。實際以你的契約、勞資協議或公司規定為準。',
        ]],
      ],
    },
  },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const linkify = (s) => esc(s).replace(/(https?:\/\/[^\s)）,，、]+)/g, '<a href="$1">$1</a>').replace(/([\w.+-]+@[\w-]+\.[\w.]+)/g, '<a href="mailto:$1">$1</a>');
const htmlLang = (l) => (l === 'zh-Hant' ? 'zh-Hant' : l);
const cjk = (l) => ['ko', 'ja', 'zh-Hant'].includes(l);

function page(lang, kind) {
  const t = T[lang];
  const p = t[kind];
  const langNav = LANGS.map((l) => (l === lang ? `<strong>${LANG_LABEL[l]}</strong>` : `<a href="../../${l}/${kind}/">${LANG_LABEL[l]}</a>`)).join(' · ');
  const pageNav = ['privacy', 'support', 'terms'].map((k) => (k === kind ? `<strong>${t.nav[k]}</strong>` : `<a href="../${k}/">${t.nav[k]}</a>`)).join(' · ');
  let body = `<h1>${esc(APP[lang])} · ${esc(p.title)}</h1>\n<p class="meta">${esc(t.operator)}<br>${esc(t.effective)}</p>\n<p>${linkify(p.intro)}</p>\n`;
  if (kind === 'terms') body += `<p><a href="${EULA}">${EULA}</a></p>\n`;
  if (kind === 'support') {
    body += `<p class="contact"><a href="mailto:${EMAIL}">${EMAIL}</a> <span class="note">${esc(t.emailNote)}</span></p>\n<h2>${esc(p.faqTitle)}</h2>\n`;
    for (const [q, a] of p.faq) body += `<h3>${esc(q)}</h3>\n<p>${linkify(a)}</p>\n`;
  } else {
    for (const [h, items] of p.sections) body += `<h2>${esc(h)}</h2>\n<ul>\n${items.map((i) => `<li>${linkify(i)}</li>`).join('\n')}\n</ul>\n`;
    body += `<p class="meta">${linkify(EMAIL)} ${esc(t.emailNote)}</p>\n`;
  }
  return `<!doctype html>
<html lang="${htmlLang(lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)} · ${esc(APP[lang])} · Ring</title>
<style>
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;max-width:720px;margin:0 auto;padding:24px 16px 64px;color:#1c1c1e;line-height:${cjk(lang) ? 1.7 : 1.55};letter-spacing:0}
@media (prefers-color-scheme:dark){body{background:#000;color:#f2f2f7}a{color:#8e8cff}}
a{color:#6155f5}h1{font-size:1.6em;line-height:1.35}h2{font-size:1.2em;margin-top:2em}h3{font-size:1.05em;margin-top:1.5em}
nav{font-size:.9em;margin-bottom:1.5em}.meta,.note{color:#8e8e93;font-size:.9em}ul{padding-left:1.2em}li{margin:.4em 0}
</style>
</head>
<body>
<nav>${langNav}<br>${pageNav}</nav>
${body}</body>
</html>
`;
}

const out = [];
for (const lang of LANGS) for (const kind of ['privacy', 'support', 'terms']) {
  const dir = join(root, 'shiftpay', lang, kind);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), page(lang, kind), 'utf8');
  out.push(`shiftpay/${lang}/${kind}/`);
}
const list = LANGS.map((l) => `<li>${LANG_LABEL[l]}: <a href="${l}/privacy/">${T[l].nav.privacy}</a> · <a href="${l}/support/">${T[l].nav.support}</a> · <a href="${l}/terms/">${T[l].nav.terms}</a></li>`).join('\n');
writeFileSync(join(root, 'shiftpay', 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Shift Pay · Ring</title></head><body style="font-family:system-ui,sans-serif;max-width:720px;margin:0 auto;padding:24px 16px"><h1>Shift Pay</h1><p>${T.en.operator}</p><ul>\n${list}\n</ul></body></html>\n`, 'utf8');
writeFileSync(join(root, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Ring apps</title></head><body style="font-family:system-ui,sans-serif;max-width:720px;margin:0 auto;padding:24px 16px"><h1>Ring apps</h1><p>${T.en.operator} Contact: <a href="mailto:${EMAIL}">${EMAIL}</a></p><ul><li><a href="shiftpay/">Shift Pay</a> (shift calendar and overtime pay estimate)</li></ul></body></html>\n`, 'utf8');
writeFileSync(join(root, '.nojekyll'), '', 'utf8');
console.log('wrote', out.length, 'pages');
