// app/cgu/page.tsx
"use client"

import Link from "next/link"

export default function CGUPage() {
  const societe = "WEBEKA" // Nom commercial / raison sociale
  const site = "https://www.webeka.io"
  const email = "contact@webeka.io"
  const adresse = "12 rue Exemple, 75000 Paris, France"
  const siren = "123 456 789"
  const dateMaj = "24/08/2025" // à mettre à jour

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">

          <header className="mb-4">
            <h1 className="display-6 fw-bold">Conditions Générales d’Utilisation</h1>
            <p className="text-muted mb-1">Dernière mise à jour : {dateMaj}</p>
            {/* <p className="text-muted">Éditeur : {societe} — SIREN {siren} — {adresse} — <a href={`mailto:${email}`}>{email}</a></p> */}
          </header>

          {/* <div className="alert alert-info">
            <strong>Important :</strong> modèle informatif à adapter et faire relire si possible par un professionnel.
          </div> */}

          <section className="mb-4">
            <h2 className="h4">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d’Utilisation (ci-après «&nbsp;CGU&nbsp;») encadrent l’accès et l’utilisation du site {site} (ci-après «&nbsp;le Site&nbsp;»)
              ainsi que des services proposés par {societe} (ci-après «&nbsp;l’Éditeur&nbsp;»). En accédant au Site, l’utilisateur (ci-après «&nbsp;l’Utilisateur&nbsp;»)
              accepte sans réserve les présentes CGU.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">2. Définitions</h2>
            <ul className="mb-0">
              <li><strong>Site :</strong> la plateforme accessible à l’adresse {site}.</li>
              <li><strong>Utilisateur :</strong> toute personne qui visite le Site et/ou utilise les services proposés.</li>
              <li><strong>Client :</strong> tout professionnel ayant souscrit une offre d’abonnement «&nbsp;site vitrine tout compris&nbsp;».</li>
              <li><strong>Contenus :</strong> textes, images, logos, informations transmis par l’Utilisateur/Client ou publiés sur le Site.</li>
              <li><strong>Essai :</strong> période gratuite de mise en ligne sur sous-domaine avant activation de l’abonnement.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4">3. Accès au Site</h2>
            <p>
              L’accès au Site est gratuit pour tout Utilisateur disposant d’un accès internet. Tous les frais liés à cet accès (matériel, logiciel, connexion)
              sont à sa charge. L’Éditeur met en œuvre des moyens raisonnables pour assurer un accès de qualité, sans obligation de résultat.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">4. Services proposés</h2>
            <p>
              {societe} propose notamment&nbsp;: (i) la création et la mise en ligne de sites vitrines standardisés et personnalisables,
              (ii) l’hébergement et la maintenance technique, (iii) l’intégration de fonctionnalités simples (ex.&nbsp;formulaire de contact,
              boutons Appeler/Itinéraire/WhatsApp, liens de prise de rendez-vous type Doctolib/Planity), (iv) un accompagnement léger
              (modifications de textes/images/horaires).
            </p>
            <p>
              Les caractéristiques détaillées des prestations sont présentées sur la page <Link className="text-primary" href="/pricing">Offre</Link>
              &nbsp;(ou communiquées lors de la prospection téléphonique/physique). L’Éditeur peut faire évoluer le périmètre des services pour des raisons
              légales, techniques ou d’amélioration continue.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">5. Souscription & informations</h2>
            <p>
              Lors d’une demande de mise en service, l’Éditeur peut solliciter des informations (identité, coordonnées, éléments de facturation, préférences
              de nom de domaine). Le Client garantit l’exactitude des informations fournies et s’engage à notifier toute mise à jour. L’Éditeur se réserve le
              droit de refuser ou d’annuler une mise en ligne en cas de suspicion de fraude ou de non-respect des présentes CGU/CGV.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">6. Essai de 30 jours & activation de l’abonnement</h2>
            <p>
              Par défaut, le site du Client est publié sur un <strong>sous-domaine</strong> durant la période d’essai (30 jours). Le Client peut tester
              les fonctionnalités (mobile, appels, itinéraires, prise de rendez-vous). Il peut interrompre l’essai à tout moment, sans frais.
            </p>
            <p>
              À l’<strong>activation de l’abonnement</strong>, l’Éditeur relie le site au nom de domaine du Client et peut migrer/ajuster les réglages finaux.
              En cas de non-activation à l’issue de l’essai, le site de démonstration peut être désactivé et supprimé.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">7. Nom de domaine</h2>
            <p>
              Le nom de domaine peut être acheté par l’Éditeur au nom et pour le compte du Client, ou directement par le Client auprès d’un registrar (ex.&nbsp;OVH).
              Le <strong>titulaire</strong> du domaine demeure le Client. En plan mensuel, le domaine est relié après activation effective de l’abonnement.
            </p>
            <p>
              Le Client s’engage à fournir les informations requises par le registrar (titulaire, contacts, DNS). L’Éditeur n’est pas responsable des
              indisponibilités liées au registrar ou aux DNS tiers.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">8. Contenus fournis par le Client</h2>
            <p>
              Le Client est seul responsable des Contenus transmis (textes, images, logos, marques, données). Il garantit disposer des droits nécessaires
              (propriété intellectuelle, droit à l’image, autorisations) et relève l’Éditeur de toute responsabilité à ce titre.
            </p>
            <p>
              Pour les secteurs sensibles (santé, bien-être), le Client s’engage à fournir des contenus à <strong>finalité informationnelle</strong>
              conformes aux recommandations applicables, sans allégations trompeuses ni promesses de résultats.
              L’Éditeur peut refuser tout contenu illicite, contraire aux bonnes mœurs, diffamatoire ou violant des droits de tiers.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">9. Propriété intellectuelle</h2>
            <p>
              Le Site, son arborescence, ses éléments graphiques, textes, logos, marques et fonctionnalités sont protégés par le droit de la propriété intellectuelle
              et demeurent, sauf mention contraire, la propriété de l’Éditeur ou de ses partenaires (ex.&nbsp;fournisseurs d’infrastructure, bibliothèques, templates).
            </p>
            <p>
              Le Client reste propriétaire de ses Contenus. Le cas échéant, l’Éditeur peut utiliser des <strong>gabarits</strong>/templates et des composants de tiers
              (ex.&nbsp;Framer) dont les licences sont respectées. Le Client bénéficie d’un droit d’usage de son site tel que mis en ligne, dans les limites du service.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">10. Données personnelles</h2>
            <p>
              L’Éditeur traite certaines données personnelles conformément à la réglementation (RGPD). Les modalités de traitement (finalités, bases légales,
              durées de conservation, droits des personnes) sont détaillées dans la <Link href="/politique-de-confidentialite">Politique de Confidentialité</Link>.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">11. Cookies</h2>
            <p>
              Le Site peut recourir à des cookies techniques et de mesure d’audience. L’Utilisateur peut paramétrer ses préférences via le bandeau cookies ou
              son navigateur. Plus d’informations dans la <Link href="/politique-de-confidentialite#cookies">section Cookies</Link>.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">12. Disponibilité & maintenance</h2>
            <p>
              L’Éditeur s’efforce d’assurer la disponibilité du Site et des services. Des opérations de maintenance, mises à jour ou interventions peuvent
              entraîner des interruptions temporaires. Le service peut s’appuyer sur des plateformes tierces (ex.&nbsp;Vercel, Framer, OVH, outils de formulaires/
              prise de rendez-vous), dont l’Éditeur ne maîtrise pas la disponibilité.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">13. Liens & services tiers</h2>
            <p>
              Le Site et/ou les sites clients peuvent intégrer des services tiers (ex.&nbsp;Doctolib, Planity, Google Maps, WhatsApp, CRM, analytics).
              L’utilisation de ces services est soumise aux conditions de leurs éditeurs respectifs. L’Éditeur ne peut garantir leur disponibilité, sécurité
              ou conformité continue.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">14. Sécurité & usage acceptable</h2>
            <p>
              L’Utilisateur et le Client s’engagent à ne pas perturber le bon fonctionnement du Site, à ne pas tenter d’accès non autorisé et à ne pas utiliser
              le service à des fins illicites (spam, collecte indue de données, contrefaçon, etc.). L’Éditeur peut prendre toute mesure utile (suspension, filtrage)
              en cas de manquement.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">15. Résiliation</h2>
            <p>
              En cas de manquement grave aux présentes CGU, l’Éditeur peut suspendre ou résilier l’accès aux services, avec ou sans préavis selon la gravité des faits.
              En cas de non-paiement à l’échéance de l’abonnement, le site du Client peut être désactivé jusqu’à régularisation.
            </p>
            <p>
              À la fin du contrat&nbsp;: (i) le site peut être désactivé, (ii) le <strong>domaine</strong> du Client reste sa propriété, (iii) le Client peut solliciter
              une exportation raisonnable des contenus qu’il a fournis (textes, images) dans un format standard. Les éléments techniques propriétaires et/ou soumis
              à licence tierce (ex.&nbsp;templates, composants) ne sont pas transférés au-delà des droits d’usage prévus.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">16. Modifications des CGU</h2>
            <p>
              L’Éditeur peut modifier les présentes CGU à tout moment pour tenir compte des évolutions légales, techniques ou des services.
              Les CGU applicables sont celles en vigueur au moment de la visite sur le Site.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4">17. Droit applicable & litiges</h2>
            <p>
              Les présentes CGU sont soumises au droit français. Tout litige relatif à leur interprétation, leur exécution ou leur validité relève des juridictions
              compétentes du ressort du siège social de l’Éditeur, sauf dispositions d’ordre public contraires.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4">18. Contact</h2>
            <p>
              Pour toute question, merci de nous contacter à l’adresse&nbsp;: <a href={`mailto:${email}`}>{email}</a>.
            </p>
          </section>

          <div className="d-flex gap-2">
            <Link href="/" className="btn btn-outline-secondary">← Retour à l’accueil</Link>
            <button
              className="btn btn-primary"
              onClick={() => window.print()}
              aria-label="Imprimer les CGU"
            >
              Imprimer
            </button>
          </div>

        </div>
      </div>
    </main>
  )
}
