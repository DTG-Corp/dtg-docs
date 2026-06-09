import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🤖 AI OCR',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Giải pháp nhận dạng ký tự quang học bằng AI — trích xuất văn bản từ hình ảnh, tài liệu scan, và PDF với độ chính xác cao.
      </>
    ),
    link: '/docs/category/ai-ocr',
  },
  {
    title: '🏌️ ALOGOFL',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Nền tảng ứng dụng AI thế hệ mới — kết hợp LLM, RAG và Agentic AI để giải quyết các bài toán doanh nghiệp phức tạp.
      </>
    ),
    link: '/docs/category/alogofl',
  },
  {
    title: '🧠 ENMA AI AGENT',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Hệ thống AI Agent thông minh — tự động hoá quy trình, phân tích dữ liệu, và hỗ trợ ra quyết định cho doanh nghiệp.
      </>
    ),
    link: '/docs/category/enma-ai-agent',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className={styles.buttons}>
          <a className="button button--secondary button--sm" href={link}>Xem chi tiết →</a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
