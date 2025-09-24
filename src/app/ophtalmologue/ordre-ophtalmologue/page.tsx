// app/mentions-legales-dentistes/page.tsx
"use client"

import Link from "next/link"

export default function MentionsDentistesPage() {
  const societe = "WEBEKA" // Nom commercial
  const site = "https://www.webeka.fr"
  const email = "contact@webeka.fr"
  const dateMaj = "11/09/2025" // à mettre à jour

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">

          <header className="mb-4">
            <h1 className="display-6 fw-bold">Mentions obligatoires – Chirurgiens-dentistes</h1>
            <p className="text-muted mb-1">Dernière mise à jour : {dateMaj}</p>
          </header>

          <section className="mb-4">
            <h2 className="h4">1. Identification du praticien</h2>
            <p>
              Conformément à l’article R.4127-215 du Code de la santé publique, tout site internet de chirurgien-dentiste doit mentionner&nbsp;:
            </p>
            <ul>
              <li>Nom et prénom du praticien</li>
              <li>Titre professionnel : « Chirurgien-dentiste »</li>
              <li>Numéro RPPS ou ADELI</li>
              <li>Département d’inscription à l’Ordre</li>
              <li>Adresse complète du cabinet</li>
              <li>Numéro de téléphone</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4">2. Honoraires</h2>
            <p>
              Le praticien doit indiquer de façon claire et accessible la politique d’honoraires&nbsp;:
            </p>
            <ul>
              <li>Les actes soumis aux tarifs conventionnés</li>
              <li>Les actes à honoraires libres</li>
              <li>La possibilité de remise d’un devis détaillé avant toute intervention</li>
            </ul>
            <p>
              Un encart « Honoraires » doit être présent sur le site, à jour et compréhensible par le patient.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4">3. Conformité déontologique</h2>
            <p>
              Le contenu du site doit respecter les règles déontologiques fixées par le Conseil national de l’Ordre&nbsp;:
            </p>
            <ul>
              <li>Information loyale, claire, pertinente et à finalité exclusivement informative</li>
              <li>Pas de publicité comparative ni mensongère</li>
              <li>Pas de promesse de résultat</li>
              <li>Pas de mise en avant de « avant / après »</li>
              <li>Illustrations et photos conformes à la dignité de la profession</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4">4. Mentions légales générales</h2>
            <p>
              Comme tout site professionnel, le site doit aussi comporter les mentions légales classiques&nbsp;:
            </p>
            <ul>
              <li>Nom de l’éditeur (le praticien)</li>
              <li>Coordonnées de l’hébergeur</li>
              <li>Politique de confidentialité (RGPD)</li>
              <li>Gestion des cookies</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4">5. Responsabilité</h2>
            <p>
              Le praticien reste responsable du contenu publié sur son site internet et de sa conformité vis-à-vis de l’Ordre des chirurgiens-dentistes.
              L’Éditeur technique ({societe}) attire l’attention sur ces obligations et fournit des gabarits conformes, mais ne se substitue pas à la
              validation juridique du praticien.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4">6. Contact Ordre national des chirurgiens-dentistes</h2>
            <p>
              Pour toute information complémentaire, se référer au site officiel du Conseil national de l’Ordre des chirurgiens-dentistes&nbsp;:
              <br/>
              <a href="https://www.ordre-chirurgiens-dentistes.fr" target="_blank" rel="noopener noreferrer">
                www.ordre-chirurgiens-dentistes.fr
              </a>
            </p>
          </section>

          <div className="d-flex gap-2">
            <Link href="/" className="btn btn-outline-secondary">← Retour à l’accueil</Link>
          </div>

        </div>
      </div>
    </main>
  )
}
