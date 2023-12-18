import BaseLayout from '../../layouts/BaseLayout.astro';
import { filteredPosts } from './[tag].astro';

<Fragment>
<BaseLayout pageTitle={tag}>
<p>Entradas etiquetadas con {tag}</p>
<ul>
{filteredPosts.map(post => <Fragment><BlogPost url={post.url} title={post.frontmatter.title} /></Fragment>)}
</ul>
</BaseLayout>
</Fragment>;
