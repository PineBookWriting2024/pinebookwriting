import Head from 'next/head';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { ArrowDown, ArrowRight, BookOpen, Check, CheckCircle2, Feather, Loader2, Mail, Sparkles } from 'lucide-react';
import { sections, isVisible } from '../lib/bookEditingQuestionnaire';
import styles from '../styles/BookEditingQuestionnaire.module.css';

export default function BookEditingQuestionnaire() {
  const [values, setValues] = useState({});
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const submitting = useRef(false);
  const resultRef = useRef(null);
  const required = sections.flatMap(section => section.fields).filter(field => field.required && isVisible(field, values));
  const completed = required.filter(field => values[field.name]?.trim()).length;
  const progress = Math.round(completed / required.length * 100);

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setStatus('submitting');
    setError('');
    try {
      const response = await fetch('/api/book-editing-questionnaire-email', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || 'Your questionnaire could not be sent. Please try again.');
      setStatus('success');
      requestAnimationFrame(() => resultRef.current?.focus());
    } catch (err) {
      setStatus('error');
      setError(err.message === 'Failed to fetch' ? 'Connection interrupted. Your answers are still here—please try again.' : err.message);
    } finally {
      submitting.current = false;
    }
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>Book Editing Questionnaire | Pine Book Writing</title>
        <meta name="description" content="Share your book proofreading and formatting preferences with Pine Book Writing." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/images/fav.webp" />
      </Head>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Pine Book Writing home"><span className={styles.brandIcon}><Feather size={25} /></span><span>PINE BOOK WRITING<small>YOUR WORDS. BEAUTIFULLY FINISHED.</small></span></Link>
        <span className={styles.headerNote}><BookOpen size={16} /> The author’s studio</span>
      </header>
      <section className={styles.hero} aria-labelledby="page-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}><span /> A LITTLE DIRECTION. A BEAUTIFUL BOOK.</div>
            <h1 id="page-title">Your story.<br />Your style.<br /><em>Our finishing touch.</em></h1>
            <p>Let’s get your manuscript ready for its next chapter. Share your proofreading and formatting preferences, and we’ll take care of the details.</p>
            <a href="#questionnaire" className={styles.heroButton}>Shape your book <ArrowDown size={17} /></a>
            <div className={styles.heroTags}><span><Check size={14} /> Thoughtful formatting</span><span><Check size={14} /> Careful proofreading</span></div>
          </div>
          <div className={styles.heroArt}>
            <div className={styles.artRing} />
            <span className={styles.artCaption}>THE NEXT CHAPTER STARTS HERE</span>
            <img src="/brand-img/front-cover-2.jpg" alt="Titch by Andy Thomas, back cover reference" className={styles.backCover} width="568" height="854" />
            <img src="/brand-img/front-cover-1.jpg" alt="Titch by Andy Thomas, front cover reference" className={styles.frontCover} width="567" height="853" />
            <div className={styles.artNote}><Sparkles size={20} /><span>From manuscript<br /><strong>to bookshelf.</strong></span></div>
          </div>
        </div>
      </section>

      <div className={styles.workspace} id="questionnaire">
        <aside className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <span className={styles.eyebrow}>YOUR BOOK BRIEF</span>
            <h2>A few details.<br />A clear direction.</h2>
            <p>Work through each section and share your proofreading and formatting preferences with our team.</p>
            <nav aria-label="Questionnaire sections">
              {sections.map((section, index) => {
                const fields = section.fields.filter(field => field.required && isVisible(field, values));
                const done = fields.every(field => values[field.name]?.trim());
                return <a href={`#${section.id}`} key={section.id}><span className={done ? styles.stepDone : styles.step}>{done ? <Check size={15} /> : `0${index + 1}`}</span>{section.shortTitle}<ArrowRight size={14} /></a>;
              })}
            </nav>
            <div className={styles.progressLabel}><span>Your progress</span><strong>{status === 'success' ? 100 : progress}%</strong></div>
            <div className={styles.progress} role="progressbar" aria-label="Required questions answered" aria-valuemin={0} aria-valuemax={100} aria-valuenow={status === 'success' ? 100 : progress}><span style={{ width: `${status === 'success' ? 100 : progress}%` }} /></div>
            <div className={styles.helpNote}><Feather size={22} /><p>Your voice stays yours.<br />We help it shine on every page.</p></div>
          </div>
        </aside>

        {status === 'success' ? (
          <section className={styles.success} tabIndex={-1} ref={resultRef} role="status">
            <CheckCircle2 size={54} /><span className={styles.eyebrow}>BRIEF RECEIVED</span>
            <h2>Your next chapter is in good hands.</h2>
            <p>Thank you, {values.authorName}. Your proofreading and formatting questionnaire has been emailed to the Pine Book Writing team. We’ll use your preferences to guide the work on <strong>{values.bookTitle}</strong>.</p>
            <Link href="/" className={styles.submit}>Back to Pine Book Writing <ArrowRight size={18} /></Link>
          </section>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formIntro}><span>BOOK PROOFREADING & FORMATTING</span><span><i>*</i> Required fields</span></div>
            <fieldset disabled={status === 'submitting'} className={styles.formFields}>
              {sections.map((section, index) => (
                <section id={section.id} key={section.id} className={styles.card} aria-labelledby={`${section.id}-title`}>
                  <div className={styles.sectionHeading}><span className={styles.sectionNumber}>0{index + 1}</span><div><h2 id={`${section.id}-title`}>{section.title}</h2><p>{section.description}</p></div></div>
                  {section.id === 'proofreading' && <div className={styles.editingGuide}><div><strong>Copy-editing</strong><p>This is checking for mistakes, inconsistencies, and repetition. During this process, your manuscript is polished for publication. The copyeditor’s main objective is to spot minor and major errors. These errors range from grammar, syntax, spelling, punctuation, and inconsistencies.</p></div><div><strong>Proofreading</strong><p>This is the last stop of a quality check in the book editing process. Proofreaders are not copyeditors. It's not the proofreader's job to edit the manuscript on the level that a copy editor does. Proofreading’s main objective is to ensure that there are no grammar, punctuation, typographical, hyphenation, capitalization, or formatting errors left in the book before it is finalized for publishing.</p></div></div>}
                  <div className={styles.fields}>
                    {section.fields.filter(field => field.type !== 'cover-reference' && isVisible(field, values)).map(field => {
                      const props = {
                        id: field.name, name: field.name, required: !!field.required, value: values[field.name] || '',
                        onChange: event => setValues(previous => ({ ...previous, [field.name]: event.target.value })),
                        'aria-describedby': field.hint ? `${field.name}-hint` : undefined,
                      };
                      return <div className={field.wide ? styles.wideField : styles.field} key={field.name}>
                        <label htmlFor={field.name}>{field.label}{field.required && <span aria-hidden="true"> *</span>}</label>
                        {field.type === 'select' ? <select {...props}><option value="" disabled>Select a preference</option>{field.options.map(option => <option key={option}>{option}</option>)}</select>
                          : field.type === 'textarea' ? <textarea {...props} rows={4} maxLength={5000} placeholder={field.placeholder} />
                            : <input {...props} type={field.type || 'text'} maxLength={300} pattern={field.required && field.type !== 'email' ? '.*\\S.*' : undefined} autoComplete={field.name === 'contactEmail' ? 'email' : field.name === 'authorName' ? 'name' : 'off'} placeholder={field.placeholder || ''} />}
                        {field.hint && <small id={`${field.name}-hint`}>{field.hint}</small>}
                      </div>;
                    })}
                  </div>
                  {section.id === 'typography' && <fieldset className={styles.references} aria-labelledby="cover-references-title" aria-describedby="cover-references-hint">
                    <div><span className={styles.eyebrow}>A VISUAL STARTING POINT</span><h3 id="cover-references-title">Cover references</h3><p id="cover-references-hint">Select your preferred cover reference. You can also preview each image and mention any details you like in your styling notes.</p>
                      {values.coverReference && <button type="button" className={styles.clearReference} onClick={() => setValues(previous => ({ ...previous, coverReference: '' }))}>Clear selection</button>}
                    </div>
                    <div className={styles.referenceImages}>{[1, 2].map(number => {
                      const reference = `Reference 0${number}`;
                      return <div className={styles.referenceOption} key={number}>
                        <label className={`${styles.referenceChoice} ${values.coverReference === reference ? styles.referenceSelected : ''}`}>
                          <img src={`/brand-img/front-cover-${number}.jpg`} alt={`Titch ${number === 1 ? 'front' : 'back'} cover reference`} width={100} height={150} loading="lazy" />
                          <span><input type="radio" name="coverReference" value={reference} checked={values.coverReference === reference} onChange={event => setValues(previous => ({ ...previous, coverReference: event.target.value }))} />{reference}</span>
                        </label>
                        <a href={`/brand-img/front-cover-${number}.jpg`} target="_blank" rel="noopener noreferrer" aria-label={`Preview cover reference ${number} in a new tab`} className={styles.referencePreview}>Preview ↗</a>
                      </div>;
                    })}</div>
                  </fieldset>}
                  {section.note && <div className={styles.note}><span>PLEASE NOTE</span><p>{section.note}</p></div>}
                </section>
              ))}
              <div className={styles.submitCard}>
                {/* <div><span className={styles.eyebrow}>READY FOR THE NEXT CHAPTER?</span><h2>Let’s bring it all together.</h2><p>Review your preferences, then send your brief to our team.</p></div> */}
                {error && <div role="alert" className={styles.error}>{error}</div>}
                <button type="submit" className={styles.submit} disabled={status === 'submitting'}>{status === 'submitting' ? <><Loader2 size={19} className={styles.spinner} /> Sending your brief…</> : <>Send my questionnaire <ArrowRight size={19} /></>}</button>
                {/* <span className={styles.delivery}><Mail size={14} /> Sent directly to the Pine Book Writing team</span> */}
              </div>
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
}
