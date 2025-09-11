// app/cgu/page.tsx
"use client"

import Link from "next/link"

export default function CGUPage() {
  // ── À PERSONNALISER ───────────────────────────────────────────────────────────
  const societe = "WEBEKA" // Nom commercial / raison sociale
  const site = "https://www.webeka.fr"
  const email = "contact@webeka.fr"
  const adresse = "Argenteuil, France" // ou adresse complète
  const siren = "123 456 789"
  const dateMaj = "11/09/2025" // à mettre à jour
  // ─────────────────────────────────────────────────────────────────────────────

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
            <strong>Important :</strong> ces CGU encadrent l’accès au site et l’usage des services Webeka. Pour la partie tarifaire et de facturation, se reporter aussi aux CGV si publiées.
          </div> */}

          <section className="mb-4">
            <h2 className="h4">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d’Utilisation (ci-après «&nbsp;CGU&nbsp;») encadrent l’accès et l’utilisation du site {site} (ci-après «&nbsp;le Site&nbsp;»)
              ainsi que des services proposés par {societe} (ci-après «&nbsp;l’Éditeur&nbsp;»). En accédant au Site et/ou en sollicitant une mise en service,
              l’utilisateur (ci-après «&nbsp;l’Utilisateur&nbsp;» ou «&nbsp;le Client&nbsp;») accepte sans réserve les présentes CGU.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">2. Définitions</h2>
            <ul className="mb-0">
              <li><strong>Site :</strong> la plateforme accessible à l’adresse {site} et les sites clients réalisés par l’Éditeur.</li>
              <li><strong>Utilisateur :</strong> toute personne qui visite le Site et/ou utilise les services proposés.</li>
              <li><strong>Client :</strong> tout professionnel ayant souscrit l’offre de site vitrine «&nbsp;clé en main&nbsp;».</li>
              <li><strong>Contenus :</strong> textes, images, logos, informations transmis par l’Utilisateur/Client ou publiés sur son site.</li>
              <li><strong>Essai (1er mois offert) :</strong> période gratuite avec mise en ligne sur <strong>sous-domaine</strong> avant activation de l’abonnement.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4">3. Accès au Site</h2>
            <p>
              L’accès au Site est gratuit pour tout Utilisateur disposant d’une connexion internet. Tous les frais liés à cet accès (matériel, logiciel, connexion)
              sont à sa charge. L’Éditeur met en œuvre des moyens raisonnables pour assurer un accès de qualité, sans obligation de résultat.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">4. Services proposés</h2>
            <p>
              {societe} propose&nbsp;: (i) la création et la mise en ligne de <strong>sites vitrines standardisés et personnalisables</strong>, (ii) l’hébergement et la maintenance technique,
              (iii) l’intégration de fonctionnalités simples (formulaire de contact, boutons Appeler/Itinéraire/WhatsApp, liens de prise de rendez-vous
              type Doctolib/Planity), (iv) un accompagnement léger (modifications usuelles de textes/images/horaires).
            </p>
            <p>
              Les caractéristiques détaillées des prestations sont présentées sur la page <Link className="text-primary" href="/pricing">Offre</Link>
              et/ou communiquées lors de la prospection. L’Éditeur peut faire évoluer le périmètre des services pour des raisons légales, techniques
              ou d’amélioration continue.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">5. Souscription & informations</h2>
            <p>
              Lors d’une demande de mise en service, l’Éditeur peut solliciter des informations (identité, coordonnées, éléments de facturation, préférences
              de nom de domaine). Le Client garantit l’exactitude des informations fournies et s’engage à notifier toute mise à jour. L’Éditeur se réserve le
              droit de refuser ou d’annuler une mise en ligne en cas de suspicion de fraude, de contenus illicites ou de non-respect des présentes CGU/CGV.
            </p>
          </section>

          <section className="mb-4" id="offre-tarifs">
            <h2 className="h4">6. Offre, essai gratuit & activation</h2>
            <p>
              L’offre Webeka comprend&nbsp;: <strong>frais de mise en place de 400&nbsp;€</strong> (facturés à l’activation) et un <strong>abonnement de 75&nbsp;€/mois</strong>.
              Le <strong>1<sup>er</sup> mois est offert</strong> : durant cette période d’essai, le site du Client est publié sur un <strong>sous-domaine</strong> fourni par l’Éditeur.
            </p>
            <p>
              À l’<strong>issue de l’essai et à l’activation</strong> de l’abonnement par le Client, l’Éditeur relie le site au <strong>nom de domaine du Client</strong>
              et réalise les ajustements finaux (DNS, SSL, analytics). En cas de non-activation à la fin de l’essai, le site de démonstration peut être désactivé et supprimé.
            </p>
            <p className="mb-0">
              Sauf stipulation contraire, l’abonnement est mensuel, sans durée minimale d’engagement, avec <strong>préavis d’un (1) mois</strong> pour résiliation (cf. art. 15).
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">7. Nom de domaine</h2>
            <p>
              Le nom de domaine peut être acheté par l’Éditeur <em>au nom et pour le compte du Client</em>, ou directement par le Client auprès d’un registrar (ex.&nbsp;OVH, Gandi).
              Le <strong>titulaire légal</strong> du domaine demeure le Client. En plan mensuel, le domaine est relié lors de l’activation effective de l’abonnement.
            </p>
            <p className="mb-0">
              Le Client fournit les informations requises par le registrar (titulaire, contacts, DNS). L’Éditeur n’est pas responsable des indisponibilités liées au registrar,
              à des modifications DNS, ou à des services tiers.
            </p>
          </section>

          <section className="mb-4" id="secteurs-sante">
            <h2 className="h4">8. Secteurs réglementés (santé, cabinets dentaires, etc.)</h2>
            <p>
              Pour les professions réglementées (ex.&nbsp;chirurgiens-dentistes), le Client demeure responsable de la conformité des <strong>contenus</strong> publiés
              (caractère informatif, exactitude, mentions obligatoires, transparence des honoraires) au regard des règles applicables (Code de la santé publique, Code de déontologie,
              recommandations de l’Ordre). À titre indicatif&nbsp;: pas de publicité comparative, pas de promesses de résultats, pas de photos «&nbsp;avant/après&nbsp;».
            </p>
            <p className="mb-0">
              L’Éditeur fournit des <strong>gabarits de mentions</strong> (identification, RPPS/ADELI, Ordre, coordonnées, notices légales, encart «&nbsp;honoraires&nbsp;») et
              attire l’attention du Client sur la nécessité de valider les contenus auprès des instances compétentes le cas échéant. Le Client s’engage à fournir des informations exactes
              et à demander la suppression de tout élément non conforme.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">9. Contenus fournis par le Client</h2>
            <p>
              Le Client est seul responsable des Contenus transmis (textes, images, logos, marques, données) et garantit disposer des droits nécessaires
              (propriété intellectuelle, droit à l’image, autorisations). Il relève l’Éditeur de toute responsabilité à ce titre et s’engage à ne publier aucun contenu illicite,
              trompeur, diffamatoire, contraire aux bonnes mœurs ou violant des droits de tiers.
            </p>
            <p className="mb-0">
              L’Éditeur peut refuser, suspendre ou retirer tout contenu non conforme ou manifestement problématique, après information du Client lorsque cela est possible.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">10. Propriété intellectuelle</h2>
            <p>
              Le Site, son arborescence, ses éléments graphiques, textes, logos, marques et fonctionnalités sont protégés par le droit de la propriété intellectuelle
              et demeurent, sauf mention contraire, la propriété de l’Éditeur ou de ses partenaires/concédants (ex.&nbsp;fournisseurs d’infrastructure, bibliothèques, templates).
            </p>
            <p className="mb-0">
              Le Client reste propriétaire de ses Contenus. L’Éditeur peut utiliser des <strong>gabarits</strong> et composants tiers (ex.&nbsp;Framer / Webflow)
              sous licences respectées. Le Client bénéficie d’un droit d’usage de son site tel que mis en ligne, dans les limites des présentes CGU/CGV et des licences tierces.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">11. Données personnelles</h2>
            <p>
              L’Éditeur traite certaines données personnelles conformément à la réglementation (RGPD). Les modalités de traitement (finalités, bases légales,
              durées de conservation, droits des personnes) sont détaillées dans la <Link href="/politique-de-confidentialite">Politique de Confidentialité</Link>.
              Le Client demeure responsable, le cas échéant, des traitements opérés pour son propre site (formulaires, prise de rendez-vous, cookies tiers).
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">12. Cookies</h2>
            <p>
              Le Site peut recourir à des cookies techniques et de mesure d’audience. L’Utilisateur peut paramétrer ses préférences via le bandeau cookies ou
              son navigateur. Plus d’informations dans la <Link href="/politique-de-confidentialite#cookies">section Cookies</Link>.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">13. Disponibilité & maintenance</h2>
            <p>
              L’Éditeur s’efforce d’assurer la disponibilité des services. Des opérations de maintenance ou d’évolution peuvent entraîner des interruptions temporaires.
              Les sites peuvent s’appuyer sur des plateformes tierces (ex.&nbsp;Framer, Webflow, Vercel, OVH, Doctolib/Planity, Google Maps, outils analytics) dont l’Éditeur
              ne maîtrise pas la disponibilité ni les évolutions de conditions.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">14. Liens & services tiers</h2>
            <p className="mb-0">
              Les sites clients peuvent intégrer des services tiers. L’utilisation de ces services est soumise aux conditions de leurs éditeurs respectifs.
              L’Éditeur ne peut garantir leur disponibilité, sécurité ou conformité continue.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">15. Sécurité & usage acceptable</h2>
            <p className="mb-0">
              L’Utilisateur et le Client s’engagent à ne pas perturber le bon fonctionnement des services, à ne pas tenter d’accès non autorisé et à ne pas utiliser
              les services à des fins illicites (spam, collecte indue de données, contrefaçon, etc.). L’Éditeur peut prendre toute mesure utile (suspension, filtrage)
              en cas de manquement manifeste.
            </p>
          </section>

          <section className="mb-4" id="facturation-resiliation">
            <h2 className="h4">16. Facturation, paiement & résiliation</h2>
            <p>
              Sauf accord particulier, la facturation intervient à l’activation (frais de mise en place de <strong>400&nbsp;€</strong> puis <strong>75&nbsp;€/mois</strong>).
              Les paiements sont mensuels (virement/SEPA) à échéance convenue. En cas de non-paiement, le site du Client peut être désactivé jusqu’à régularisation.
            </p>
            <p>
              Le Client peut résilier <strong>sans durée minimale</strong>, avec un <strong>préavis d’un (1) mois</strong> à compter de la demande écrite à <a href={`mailto:${email}`}>{email}</a>.
              À la fin du contrat&nbsp;: (i) le site peut être désactivé, (ii) le <strong>domaine</strong> du Client reste sa propriété, (iii) le Client peut obtenir une
              exportation raisonnable des contenus qu’il a fournis (textes, images) dans un format standard. Les éléments techniques propriétaires et/ou soumis à
              licence tierce (templates, composants) ne sont pas transférés au-delà des droits d’usage.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">17. Modifications des CGU</h2>
            <p className="mb-0">
              L’Éditeur peut modifier les présentes CGU à tout moment pour tenir compte des évolutions légales, techniques ou des services.
              Les CGU applicables sont celles en vigueur au moment de la visite sur le Site.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4">18. Droit applicable & litiges</h2>
            <p className="mb-0">
              Les présentes CGU sont soumises au droit français. Tout litige relatif à leur interprétation, exécution ou validité relève des juridictions
              compétentes du ressort du siège social de l’Éditeur, sauf dispositions d’ordre public contraires.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4">19. Contact</h2>
            <p className="mb-0">
              Pour toute question, merci de nous contacter à&nbsp;: <a href={`mailto:${email}`}>{email}</a>.
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
