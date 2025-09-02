"use client";
import React, { useMemo, useRef, useState } from "react";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

// ——————————————————————————————————————————————————————————
// Utilitaire : Zone d'import de fichiers avec drag & drop
// ——————————————————————————————————————————————————————————
function FileDrop({
  id,
  label,
  helper,
  multiple = false,
  accept = "image/*",
  onFiles,
  files,
  error,
}: {
  id: string;
  label: string;
  helper?: string;
  multiple?: boolean;
  accept?: string;
  onFiles: (files: File[]) => void;
  files: File[];
  error?: string | null;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isOver, setIsOver] = useState(false);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const arr = Array.from(fileList);
    onFiles(arr);
  };

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsOver(true);
        }}
        onDragLeave={() => setIsOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsOver(false);
          handleFiles(e.dataTransfer.files);
        }}
        role="button"
        className={`border rounded-3 p-4 text-center ${
          isOver ? "border-primary bg-light" : "border-secondary-subtle"
        }`}
        aria-describedby={`${id}-help ${id}-error`}
      >
        <input
          ref={inputRef}
          id={id}
          type="file"
          className="d-none"
          onChange={(e) => handleFiles(e.currentTarget.files)}
          accept={accept}
          multiple={multiple}
        />
        <div className="small text-muted mb-2">Aucun fichier choisi</div>
        <div className="fw-semibold">Cliquez pour choisir un fichier ou glissez-le ici</div>
        <div className="text-muted">Limite de taille : 10 MB</div>
      </div>
      {helper && (
        <div id={`${id}-help`} className="form-text">
          {helper}
        </div>
      )}
      {files.length > 0 && (
        <ul className="list-group list-group-flush border rounded mt-2">
          {files.map((f, idx) => (
            <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
              <span className="text-truncate" style={{ maxWidth: 420 }}>
                {f.name}
              </span>
              <span className="badge bg-secondary rounded-pill">
                {(f.size / (1024 * 1024)).toFixed(2)} MB
              </span>
            </li>
          ))}
        </ul>
      )}
      {error && (
        <div id={`${id}-error`} className="invalid-feedback d-block">
          {error}
        </div>
      )}
    </div>
  );
}

// ——————————————————————————————————————————————————————————
// Page/Formulaire
// ——————————————————————————————————————————————————————————
export default function FormulaireBarber() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState<null | "ok" | "error">(null);

  // Champs textes / sélections
  const [nomExact, setNomExact] = useState("");
  const [stylePref, setStylePref] = useState("");
  const [stylePrecision, setStylePrecision] = useState(""); // précision libre du style // sobre | coloré | élégant | autre
  const [servicePrincipal, setServicePrincipal] = useState("");
  const [contactsPrioritaires, setContactsPrioritaires] = useState<string[]>([]);
  const [contactPrecision, setContactPrecision] = useState("");
  const [couleurDominante, setCouleurDominante] = useState("");
  const [reseauxSociaux, setReseauxSociaux] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [domaine, setDomaine] = useState("");
  const [autorisationPhotos, setAutorisationPhotos] = useState(false);
  
  // Fichiers
  const [logo, setLogo] = useState<File[]>([]);
  const [images, setImages] = useState<File[]>([]);

  // Erreurs de validation
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const toggleContact = (key: string) => {
    setContactsPrioritaires((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const validate = (): boolean => {
    const next: Record<string, string | null> = {};

    // Champs requis
    if (!nomExact.trim()) next.nomExact = "Ce champ est requis.";
    if (!stylePref) next.stylePref = "Veuillez sélectionner un style.";
    if (contactsPrioritaires.length === 0) next.contactsPrioritaires = "Veuillez choisir au moins un canal de contact.";
    if (!couleurDominante.trim()) next.couleurDominante = "Ce champ est requis.";

    // Domaine : URL ou nom de domaine simple
    if (!domaine.trim()) {
      next.domaine = "Ce champ est requis.";
    } else {
      const urlLike = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i.test(domaine.trim());
      if (!urlLike) next.domaine = "Veuillez saisir une URL ou un nom de domaine valide.";
    }

    // Email / téléphone (facultatifs mais validés si saisis)
    if (email) {
      const ok = email.indexOf('@') > 0 && email.lastIndexOf('.') > email.indexOf('@') + 1;
      if (!ok) next.email = "Adresse e‑mail invalide.";
    }
    if (telephone) {
      const digits = telephone.replace(/[^0-9]/g, "");
      if (digits.length < 6) next.telephone = "Numéro de téléphone invalide.";
    }

    // Taille des fichiers
    const tooBig = (f: File) => f.size > MAX_FILE_SIZE;
    if (logo.some(tooBig)) next.logo = "Le logo dépasse 10 MB.";
    if (images.some(tooBig)) next.images = "Une ou plusieurs images dépassent 10 MB.";

    // Autorisation obligatoire si images
    if (images.length > 0 && !autorisationPhotos)
      next.autorisationPhotos = "Obligatoire si vous importez des photos.";

    setErrors(next);
    return Object.values(next).every((v) => !v);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSending(true);

      // Exemple d'envoi : FormData -> /api/formulaire (à implémenter côté serveur)
      const fd = new FormData();
      fd.append("nomExact", nomExact);
      fd.append("stylePref", stylePref);
      fd.append("stylePrecision", stylePrecision);
      fd.append("servicePrincipal", servicePrincipal);
      fd.append("contactsPrioritaires", JSON.stringify(contactsPrioritaires));
      fd.append("contactPrecision", contactPrecision);
      fd.append("couleurDominante", couleurDominante);
      fd.append("reseauxSociaux", reseauxSociaux);
      fd.append("email", email);
      fd.append("telephone", telephone);
      fd.append("domaine", domaine);
      fd.append("autorisationPhotos", String(autorisationPhotos));
            if (logo[0]) fd.append("logo", logo[0]);
      images.forEach((img, i) => fd.append(`images_${i}`, img));

      const res = await fetch("https://hook.eu2.make.com/7xzucg3rzpnqyrfpvfq2ur24dst6v51y", {
        method: "POST",
        body: fd,
      });
      if (!res.ok) throw new Error(`Webhook error: ${res.status}`);
      setSubmitted("ok");
      (e.target as HTMLFormElement).reset();
      // Reset contrôles contrôlés
      setNomExact("");
      setStylePref("");
      setStylePrecision("");
      setServicePrincipal("");
      setContactsPrioritaires([]);
      setContactPrecision("");
      setCouleurDominante("");
      setReseauxSociaux("");
      setDomaine("");
      setEmail("");
      setTelephone("");
      setAutorisationPhotos(false);
            setLogo([]);
      setImages([]);
      setErrors({});
    } catch (err) {
      console.error(err);
      setSubmitted("error");
    } finally {
      setSending(false);
    }
  };

  const logoError = useMemo(() => errors.logo ?? null, [errors.logo]);
  const imagesError = useMemo(() => errors.images ?? null, [errors.images]);

  return (
    <div className="container py-4">
      <h1 className="h3 mb-4">Brief de création – Barbier</h1>

      {submitted === "ok" && (
        <div className="alert alert-success" role="alert">
          Merci ! Votre brief a bien été envoyé.
        </div>
      )}
      {submitted === "error" && (
        <div className="alert alert-danger" role="alert">
          Oups, une erreur est survenue. Veuillez réessayer.
        </div>
      )}

      <form className="needs-validation" noValidate onSubmit={onSubmit} encType="multipart/form-data">
        {/* Nom exact */}
        <div className="mb-3">
          <label htmlFor="nomExact" className="form-label">
            Quel nom exact souhaitez-vous afficher sur le site ? <span className="text-danger">*</span>
          </label>
          <input
            id="nomExact"
            type="text"
            className={`form-control ${errors.nomExact ? "is-invalid" : ""}`}
            placeholder="Ex : Barbershop Paris"
            value={nomExact}
            onChange={(e) => setNomExact(e.target.value)}
            required
          />
          {errors.nomExact && <div className="invalid-feedback">{errors.nomExact}</div>}
        </div>

        {/* Logo */}
        <FileDrop
          id="logo"
          label="Avez-vous un logo à intégrer ? (sinon, je mets un logo temporaire)"
          helper="Formats recommandés : .svg, .png, .jpg"
          multiple={false}
          accept="image/*"
          files={logo}
          error={logoError}
          onFiles={(files) => {
            // On ne garde qu'un seul logo
            const valid = files.slice(0, 1);
            setLogo(valid);
            // Vérif taille immédiate
            if (valid[0] && valid[0].size > MAX_FILE_SIZE) {
              setErrors((e) => ({ ...e, logo: "Le logo dépasse 10 MB." }));
            } else {
              setErrors((e) => ({ ...e, logo: null }));
            }
          }}
        />

        {/* Style préféré */}
        <div className="mb-3">
          <label htmlFor="stylePref" className="form-label">
            Préférez-vous un style plutôt sobre, coloré ou élégant ou autre ? <span className="text-danger">*</span>
          </label>
          <select
            id="stylePref"
            className={`form-select ${errors.stylePref ? "is-invalid" : ""}`}
            value={stylePref}
            onChange={(e) => setStylePref(e.target.value)}
            required
          >
            <option value="">— Sélectionner —</option>
            <option value="sobre">Sobre / minimaliste</option>
            <option value="coloré">Coloré</option>
            <option value="élégant">Élégant</option>
            <option value="autre">Autre (à préciser ci-dessous)</option>
          </select>
          {errors.stylePref && <div className="invalid-feedback">{errors.stylePref}</div>}
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Ex : Style sobre et minimaliste"
            value={stylePrecision}
            onChange={(e) => setStylePrecision(e.target.value)}
          />
        </div>

        {/* Service principal */}
        <div className="mb-3">
          <label htmlFor="servicePrincipal" className="form-label">
            Quel est le service principal à mettre en avant ?
          </label>
          <input
            id="servicePrincipal"
            type="text"
            className="form-control"
            placeholder="Ex : Ma spécialité c'est les barbes"
            value={servicePrincipal}
            onChange={(e) => setServicePrincipal(e.target.value)}
          />
        </div>

        {/* Moyens de contact (multi-choix) */}
        <fieldset className="mb-3">
          <legend className="col-form-label pt-0">
            Comment vos clients doivent-ils vous contacter en priorité ? <span className="text-danger">*</span>
          </legend>
          {["WhatsApp", "Appel", "Réservation en ligne", "Formulaire", "Planity"].map((opt) => {
            const id = "contact-" + opt.replace(/\s+/g, "-").toLowerCase();
            return (
              <div className="form-check" key={opt}>
                <input
                  className={`form-check-input ${errors.contactsPrioritaires ? "is-invalid" : ""}`}
                  type="checkbox"
                  id={id}
                  checked={contactsPrioritaires.includes(opt)}
                  onChange={() => toggleContact(opt)}
                />
                <label className="form-check-label" htmlFor={id}>
                  {opt}
                </label>
              </div>
            );
          })}
          {errors.contactsPrioritaires && (
            <div className="invalid-feedback d-block">{errors.contactsPrioritaires}</div>
          )}
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Précisez si besoin (ex. numéro WhatsApp, lien Planity…)"
            value={contactPrecision}
            onChange={(e) => setContactPrecision(e.target.value)}
          />
          <div className="form-text">Ex : Nous utilisons principalement WhatsApp pour les réservations</div>
        </fieldset>

        {/* Couleur dominante */}
        <div className="mb-3">
          <label htmlFor="couleurDominante" className="form-label">
            Avez-vous une couleur dominante que vous aimez utiliser ? <span className="text-danger">*</span>
          </label>
          <input
            id="couleurDominante"
            type="text"
            className={`form-control ${errors.couleurDominante ? "is-invalid" : ""}`}
            placeholder="Ex : Les couleurs de mon image de marque sont le rouge et le noir"
            value={couleurDominante}
            onChange={(e) => setCouleurDominante(e.target.value)}
            required
          />
          {errors.couleurDominante && (
            <div className="invalid-feedback">{errors.couleurDominante}</div>
          )}
        </div>

        {/* Réseaux sociaux */}
        <div className="mb-3">
          <label htmlFor="reseauxSociaux" className="form-label">
            Voulez-vous que j’intègre vos réseaux sociaux (Instagram, Facebook, etc.) ?
          </label>
          <textarea
            id="reseauxSociaux"
            className="form-control"
            rows={2}
            placeholder="Ex : Oui, nous utilisons principalement Instagram pour présenter nos dernières coupes"
            value={reseauxSociaux}
            onChange={(e) => setReseauxSociaux(e.target.value)}
          />
        </div>

        {/* Images */}$1<div className="mb-3">
  <label htmlFor="email" className="form-label">Adresse e‑mail</label>
  <input
    id="email"
    type="email"
    className={`form-control ${errors.email ? "is-invalid" : ""}`}
    placeholder="ex : contact@barbershop.fr"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
</div>
<div className="mb-3">
  <label htmlFor="telephone" className="form-label">Téléphone</label>
  <input
    id="telephone"
    type="tel"
    className={`form-control ${errors.telephone ? "is-invalid" : ""}`}
    placeholder="ex : +33 6 12 34 56 78"
    value={telephone}
    onChange={(e) => setTelephone(e.target.value)}
  />
  {errors.telephone && <div className="invalid-feedback">{errors.telephone}</div>}
</div>
<FileDrop
  id="images"
          label="Avez-vous des images à insérer ? (sinon je peux en créer)"
          helper="Vous pouvez glisser plusieurs photos. Formats : .jpg, .png, .webp"
          multiple
          accept="image/*"
          files={images}
          error={imagesError}
          onFiles={(files) => {
            const valid = files;
            setImages(valid);
            if (valid.some((f) => f.size > MAX_FILE_SIZE)) {
              setErrors((e) => ({ ...e, images: "Une ou plusieurs images dépassent 10 MB." }));
            } else {
              setErrors((e) => ({ ...e, images: null }));
            }
          }}
        />

        {/* Domaine */}
        <div className="mb-3">
          <label htmlFor="domaine" className="form-label">
            Nom de domaine choisi ?
            <span className="text-danger"> *</span>
          </label>
          <input
            id="domaine"
            type="text"
            className={`form-control ${errors.domaine ? "is-invalid" : ""}`}
            placeholder="Ex : www.barber-star-paris.fr"
            value={domaine}
            onChange={(e) => setDomaine(e.target.value)}
            required
          />
          <div className="form-text">
            Conseil : choisissez un nom avec celui de votre barber + votre ville. {" "}
            <a href="/domain-check" target="_blank" rel="noreferrer" className="text-danger"><strong>Cliquez ici pour chercher un nom de domaine</strong></a>
          </div>
          {errors.domaine && <div className="invalid-feedback">{errors.domaine}</div>}
        </div>

        
        {/* Autorisation d'utilisation des photos (obligatoire si photos) */}
        <div className="mb-3 form-check">
          <input
            className={`form-check-input ${errors.autorisationPhotos ? "is-invalid" : ""}`}
            type="checkbox"
            id="autorisation"
            checked={autorisationPhotos}
            onChange={(e) => setAutorisationPhotos(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="autorisation">
            Autorisation d’utilisation des photos – obligatoire si photos
          </label>
          {errors.autorisationPhotos && (
            <div className="invalid-feedback d-block">{errors.autorisationPhotos}</div>
          )}
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn bg-black text-white" disabled={sending}>
            {sending ? "Envoi…" : "Envoyer"}
          </button>
          <button
            type="reset"
            className="btn btn-outline-secondary"
            onClick={() => {
              setNomExact("");
              setStylePref("");
      setStylePrecision("");
              setServicePrincipal("");
              setContactsPrioritaires([]);
      setContactPrecision("");
              setCouleurDominante("");
              setReseauxSociaux("");
              setDomaine("");
              setEmail("");
              setTelephone("");
              setAutorisationPhotos(false);
                            setLogo([]);
              setImages([]);
              setErrors({});
              setSubmitted(null);
            }}
          >
            Réinitialiser
          </button>
        </div>
      </form>

      <hr className="my-4" />
      <p className="text-muted small mb-0">
        * Champs obligatoires — Les fichiers importés sont limités à 10 MB chacun.
      </p>
    </div>
  );
}
