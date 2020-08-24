import { useEffect, useState } from 'react';

export default (searchTerm: string) => {
  const [quotes, setQuotes] = useState<Array<string>>([]);
  useEffect(() => {
    const getQuotes = async () => {
      if (!searchTerm || searchTerm.length < 4) return;

      try {
        const response = await fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes/search/' + searchTerm);
        const json = await response.json();
        setQuotes(json);
      } catch (error) {}
    };

    getQuotes();
  }, [searchTerm]);

  return quotes;
};
