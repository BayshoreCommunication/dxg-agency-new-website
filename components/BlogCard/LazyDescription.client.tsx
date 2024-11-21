'use client';
import React, { useState, useEffect, useRef } from 'react';
import parse from 'html-react-parser';

interface LazyDescriptionProps {
  description: string;
}

const css = `
  h1{
    padding-top: 10px;
    font-size: 40px;
    padding-bottom: 10px;
  }
  h2{
    padding-top: 10px;
    font-size: 25px;
    padding-bottom: 10px;
  }
  p{
    padding-top: 6px;
    padding-bottom: 6px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;

  }
  br{
    padding-top: 6px;
    padding-bottom: 6px;
}

`;

const LazyDescription: React.FC<LazyDescriptionProps> = ({ description }) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(description, 'text/html');
  const allElements = Array.from(doc.body.childNodes);

  const [loadedElements, setLoadedElements] = useState<Node[]>([]);
  const loadIndex = useRef(0);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Delay the loading of elements
    const timer = setTimeout(() => {
      setLoadedElements(allElements.slice(0, 1));
      loadIndex.current = 1;

      // Initialize Intersection Observer
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadNextElements();
              entry.target.classList.add('textEntryAnimation');
            }
          });
        },
        {
          rootMargin: '0px',
          threshold: 0.1,
        }
      );
    }, 1000); // Delay for 1 second

    return () => {
      clearTimeout(timer);
      observer.current?.disconnect();
    };
  }, [description]);

  const loadNextElements = () => {
    if (loadIndex.current < allElements.length) {
      const nextElement = allElements.slice(
        loadIndex.current,
        loadIndex.current + 1
      );
      setLoadedElements((loaded) => [...loaded, ...nextElement]);
      loadIndex.current += 1;
    }
  };

  useEffect(() => {
    // Observe each loaded element after delay
    const currentObserver = observer.current;
    const currentElements = document.querySelectorAll('.lazyTextElement');

    currentElements.forEach((element) => currentObserver?.observe(element));

    return () => {
      currentElements.forEach((element) => currentObserver?.unobserve(element));
    };
  }, [loadedElements]);

  return (
    <>
      <style>{css}</style>
      <div className='text-justify'>
        {loadedElements.map((element, index) => {
          if (element.nodeType === Node.ELEMENT_NODE) {
            const htmlElement = element as Element;
            return (
              <div key={index} className='lazyTextElement'>
                {parse(htmlElement.outerHTML)}
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default LazyDescription;
