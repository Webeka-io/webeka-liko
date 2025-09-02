// app/cgu/page.tsx
"use client"

import Link from "next/link"

export function CGUPage() {
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
            {/*<p className="text-muted">Éditeur : {societe} — SIREN {siren} — {adresse} — <a href={`mailto:${email}`}>{email}</a></p>*/}
          </header>

         {/* <div className="alert alert-info">
            <strong>Important :</strong> ces CGU sont un modèle informatif. Adapte-les à ton activité, à ta politique commerciale et fais-les relire par un professionnel si possible.
          </div>*/}

          <section className="mb-4">
            <h2 className="h4">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d’Utilisation (ci-après « CGU ») encadrent l’accès et l’utilisation du site {site} (ci-après « le Site ») ainsi que
              des services proposés par {societe} (ci-après « l’Éditeur »). En accédant au Site, l’utilisateur (ci-après « l’Utilisateur ») accepte sans réserve
              les présentes CGU.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">2. Définitions</h2>
            <ul className="mb-0">
              <li><strong>Site :</strong> la plateforme accessible à l’adresse {site}.</li>
              <li><strong>Utilisateur :</strong> toute personne qui visite le Site et/ou utilise les services proposés.</li>
              <li><strong>Client :</strong> tout professionnel ayant souscrit une offre de création et d’hébergement de site vitrine.</li>
              <li><strong>Contenus :</strong> textes, images, logos, informations transmis par l’Utilisateur/Client ou publiés sur le Site.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4">3. Accès au Site</h2>
            <p>
              L’accès au Site est gratuit pour tout Utilisateur disposant d’un accès internet. Tous les frais liés à cet accès (matériel, logiciel, connexion)
              sont à sa charge. L’Éditeur met en œuvre les moyens raisonnables pour assurer un accès de qualité, sans obligation de résultat.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">4. Services proposés</h2>
            <p>
              {societe} propose notamment : (i) la création et la mise en ligne de sites vitrines standardisés, (ii) l’hébergement et la maintenance technique,
              (iii) l’intégration de fonctionnalités simples (ex. formulaire de contact, lien de prise de rendez-vous, bouton WhatsApp).
            </p>
            <p>
              Les caractéristiques, tarifs et limites des services sont précisés sur la page <Link className="text-primary " href="/pricing">Offre</Link> et peuvent évoluer. Toute nouvelle
              souscription sera soumise aux conditions en vigueur au jour de la commande.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">5. Compte et souscription</h2>
            <p>
              L’Éditeur peut demander certaines informations (identité, coordonnées, informations de facturation) lors d’une commande. Le Client garantit
              l’exactitude des informations fournies et s’engage à notifier toute mise à jour. L’Éditeur se réserve le droit de refuser ou d’annuler une commande
              en cas de suspicion de fraude ou de non-respect des CGU/CGV.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">6. Contenus fournis par le Client</h2>
            <p>
              Le Client est seul responsable des Contenus transmis (textes, images, logos, marques, données). Il garantit disposer des droits nécessaires
              (propriété intellectuelle, droit à l’image, autorisations) et relève l’Éditeur de toute responsabilité à ce titre.
            </p>
            <p>
              L’Éditeur se réserve la faculté de refuser tout Contenu illicite, contraire aux bonnes mœurs, trompeur, diffamatoire, ou violant des droits
              de tiers. Le Client s’engage à fournir des Contenus conformes à la réglementation applicable.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">7. Propriété intellectuelle</h2>
            <p>
              Le Site, son arborescence, ses éléments graphiques, textes, logos, marques et fonctionnalités sont protégés par le droit de la propriété
              intellectuelle. Sauf mention contraire, ils demeurent la propriété exclusive de l’Éditeur ou de ses partenaires.
            </p>
            <p>
              Le Client reste propriétaire de ses propres Contenus (textes, images, logos) fournis pour la réalisation de son site. L’Éditeur bénéficie
              d’une licence non exclusive, mondiale et gratuite pour héberger, reproduire et afficher ces Contenus aux seules fins d’exécuter le service.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">8. Données personnelles</h2>
            <p>
              L’Éditeur traite certaines données personnelles conformément à la réglementation (RGPD). Les modalités de traitement, bases légales, durées de
              conservation, droits des personnes et coordonnées sont détaillées dans la <Link href="/politique-de-confidentialite">Politique de Confidentialité</Link>.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">9. Cookies</h2>
            <p>
              Le Site peut recourir à des cookies techniques ou de mesure d’audience. L’Utilisateur peut paramétrer ses préférences via le bandeau cookies ou
              son navigateur. Pour en savoir plus, consulte la <Link href="/politique-de-confidentialite#cookies">section Cookies</Link>.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">10. Disponibilité & maintenance</h2>
            <p>
              L’Éditeur s’efforce d’assurer la disponibilité du Site et des services. Des opérations de maintenance, mises à jour ou interventions peuvent
              entraîner des interruptions temporaires. L’Éditeur ne saurait être tenu responsable des indisponibilités imputables à des tiers, au réseau internet
              ou à des cas de force majeure.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">11. Responsabilité</h2>
            <p>
              L’Éditeur ne peut être tenu responsable des dommages indirects (perte de chiffre d’affaires, de chance, d’image), ni des dommages résultant d’un
              usage non conforme du Site ou des services. Les liens externes présents sur le Site pointent vers des sites dont l’Éditeur n’est pas responsable.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">12. Liens & services tiers</h2>
            <p>
              Le Site peut intégrer des services tiers (ex. prise de rendez-vous, messagerie). L’utilisation de ces services est soumise aux conditions de leurs
              éditeurs respectifs. L’Éditeur ne peut garantir leur disponibilité, leur sécurité ou leur conformité.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">13. Résiliation</h2>
            <p>
              En cas de manquement grave aux CGU, l’Éditeur peut suspendre ou résilier l’accès aux services, avec ou sans préavis selon la gravité des faits.
              En cas de non-paiement à l’échéance de l’abonnement, le site du Client peut être désactivé jusqu’à régularisation.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">14. Modifications des CGU</h2>
            <p>
              L’Éditeur peut modifier les présentes CGU à tout moment pour tenir compte des évolutions légales, techniques ou des services. Les CGU applicables
              sont celles en vigueur au moment de la visite sur le Site.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">15. Droit applicable & litiges</h2>
            <p>
              Les présentes CGU sont soumises au droit français. Tout litige relatif à leur interprétation, leur exécution ou leur validité relève des juridictions
              compétentes du ressort du siège social de l’Éditeur, sauf dispositions d’ordre public contraires.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4">16. Contact</h2>
            <p>
              Pour toute question, merci de nous contacter à l’adresse : <a href={`mailto:${email}`}>{email}</a>.
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
export default CGUPage;