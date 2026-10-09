import {getChatGPTUser,chatGPTSignInPath,chatGPTSignOutPath} from '../chatgpt-auth';
export const dynamic='force-dynamic';
export default async function Account(){
 const user=await getChatGPTUser();
 return <main style={{maxWidth:640,margin:'70px auto',padding:28,fontFamily:'Arial, sans-serif',lineHeight:1.8}}>
 <a href="/shop">← Terug naar REVE</a><p>REVE / MIJN ACCOUNT</p><h1>{user?'Welkom bij REVE':'Jouw REVE-account'}</h1>
 {user?<><p>Je bent ingelogd als <strong>{user.displayName}</strong>.</p><p>Je account is klaar voor de toekomstige bestelomgeving. Bestellen en betalen zijn nog niet beschikbaar.</p><a href={chatGPTSignOutPath('/shop')} target="_top">Uitloggen</a></>:<><p>Je kunt de collectie zonder account bekijken en je winkelmand samenstellen. Voor bestellen moet je ingelogd zijn.</p><p>Gebruik je ChatGPT-account. Heb je er nog geen? Je kunt er een aanmaken tijdens de beveiligde aanmeldprocedure. REVE bewaart geen wachtwoord.</p><a href={chatGPTSignInPath('/account')} target="_top" style={{display:'inline-block',background:'#242720',color:'#f6f3ed',padding:'14px 24px',textDecoration:'none'}}>Inloggen of account aanmaken met ChatGPT ↗</a></>}
 <p style={{fontSize:13}}>Vragen? <a href="tel:+31638207264">Bel 06 3820 7264</a></p></main>;
}
