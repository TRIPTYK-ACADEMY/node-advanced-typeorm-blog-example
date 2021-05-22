import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Article } from '../../models/articles.model';

define(Article, () => {
    const article = new Article();
    article.content = Faker.lorem.paragraphs();
    article.title = Faker.name.title();
    return article;
});
