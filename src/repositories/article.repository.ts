import { EntityRepository, Repository } from 'typeorm';
import { Article } from '../models/articles.model';

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
    
}