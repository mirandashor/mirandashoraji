import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatBubble from './ChatBubble';

describe('ChatBubble Component', () => {
  it('should render the chat button with MessageCircle icon', () => {
    render(<ChatBubble />);
    const button = screen.getByTitle('Ask me questions!');
    expect(button).toBeInTheDocument();
  });

  it('should open popup when button is clicked', () => {
    render(<ChatBubble />);
    const button = screen.getByTitle('Ask me questions!');

    // Initially, popup should not be visible
    expect(screen.queryByText('What languages have I worked with?')).not.toBeInTheDocument();

    // Click the button to open the popup
    fireEvent.click(button);

    // Now the questions should be visible
    expect(screen.getByText('What languages have I worked with?')).toBeInTheDocument();
    expect(screen.getByText('Have I worked with cloud services?')).toBeInTheDocument();
    expect(screen.getByText('Where can you contact me?')).toBeInTheDocument();
  });

  it('should close popup when button is clicked again', () => {
    render(<ChatBubble />);
    const button = screen.getByTitle('Ask me questions!');

    // Open the popup
    fireEvent.click(button);
    expect(screen.getByText('What languages have I worked with?')).toBeInTheDocument();

    // Close the popup
    fireEvent.click(button);
    expect(screen.queryByText('What languages have I worked with?')).not.toBeInTheDocument();
  });

  it('should display answer when a question is selected', () => {
    render(<ChatBubble />);
    const button = screen.getByTitle('Ask me questions!');

    // Open the popup
    fireEvent.click(button);

    // Click on a question
    const questionButton = screen.getByText('What languages have I worked with?');
    fireEvent.click(questionButton);

    // The answer should be displayed
    expect(screen.getByText('JavaScript, HTML, CSS, TypeScript, C++')).toBeInTheDocument();
    expect(screen.getByText('← Back')).toBeInTheDocument();
  });

  it('should return to questions list when Back button is clicked', () => {
    render(<ChatBubble />);
    const button = screen.getByTitle('Ask me questions!');

    // Open the popup
    fireEvent.click(button);

    // Click on a question
    const questionButton = screen.getByText('Have I worked with cloud services?');
    fireEvent.click(questionButton);

    // Click the Back button
    const backButton = screen.getByText('← Back');
    fireEvent.click(backButton);

    // Questions should be visible again
    expect(screen.getByText('What languages have I worked with?')).toBeInTheDocument();
  });

  it('should display correct answer for each question', () => {
    render(<ChatBubble />);
    const button = screen.getByTitle('Ask me questions!');

    // Open the popup
    fireEvent.click(button);

    // Test second question
    const secondQuestion = screen.getByText('Have I worked with cloud services?');
    fireEvent.click(secondQuestion);
    expect(screen.getByText('Yes! Amazon Web Services and Google Cloud Platform')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();

    // Go back
    fireEvent.click(screen.getByText('← Back'));

    // Test third question
    const thirdQuestion = screen.getByText('Where can you contact me?');
    fireEvent.click(thirdQuestion);
    expect(screen.getByText('I’m happy to connect!')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('should keep the same chat thread when switching languages', () => {
    render(<ChatBubble />);
    const button = screen.getByTitle('Ask me questions!');

    fireEvent.click(button);
    fireEvent.click(screen.getByText('What languages have I worked with?'));
    fireEvent.click(screen.getByText('JavaScript'));

    expect(screen.getByText('What languages have I worked with?')).toBeInTheDocument();
    expect(screen.getByText('What projects have I made with JavaScript?')).toBeInTheDocument();
    expect(screen.getByText('CineMatch')).toBeInTheDocument();

    fireEvent.click(screen.getByText('HTML'));

    expect(screen.getByText('What projects have I made with HTML?')).toBeInTheDocument();
    expect(screen.getByText('CineMatch')).toBeInTheDocument();
    expect(screen.getByText('What languages have I worked with?')).toBeInTheDocument();
  });

  it('should show a project preview and jump button when a project is selected', () => {
    render(<ChatBubble />);
    fireEvent.click(screen.getByTitle('Ask me questions!'));
    fireEvent.click(screen.getByText('What languages have I worked with?'));
    fireEvent.click(screen.getByText('JavaScript'));
    fireEvent.click(screen.getAllByText('CineMatch')[0]);

    expect(screen.getAllByText('CineMatch').length).toBeGreaterThan(1);
    expect(screen.getByText(/A movie recommendation generator/i)).toBeInTheDocument();
    expect(screen.getByText('Jump to project')).toBeInTheDocument();
  });

  it('should map TypeScript to Mixlist instead of the portfolio', () => {
    render(<ChatBubble />);
    fireEvent.click(screen.getByTitle('Ask me questions!'));
    fireEvent.click(screen.getByText('What languages have I worked with?'));
    fireEvent.click(screen.getByText('TypeScript'));

    expect(screen.getByText('Mixlist')).toBeInTheDocument();
    expect(screen.queryByText('My Portfolio')).not.toBeInTheDocument();
  });

  it('should show cloud detail cards when learn more is clicked', () => {
    render(<ChatBubble />);
    fireEvent.click(screen.getByTitle('Ask me questions!'));
    fireEvent.click(screen.getByText('Have I worked with cloud services?'));
    fireEvent.click(screen.getByText('AWS'));

    expect(screen.getByText('CineMatch used Amazon Web Services')).toBeInTheDocument();
    expect(screen.getByText(/Amazon Web Services supported the deployment/i)).toBeInTheDocument();
    expect(screen.getByText('View project')).toBeInTheDocument();

    fireEvent.click(screen.getByText('← Back'));
    fireEvent.click(screen.getByText('Have I worked with cloud services?'));
    fireEvent.click(screen.getAllByText('GCP')[0]);
    expect(screen.getByText(/Google Cloud Platform was used to create and test AI models/i)).toBeInTheDocument();
    expect(screen.getByText('No public project to showcase yet.')).toBeInTheDocument();
  });

  it('should toggle popup state correctly multiple times', () => {
    render(<ChatBubble />);
    const button = screen.getByTitle('Ask me questions!');

    // Open
    fireEvent.click(button);
    expect(screen.getByText('What languages have I worked with?')).toBeInTheDocument();

    // Close
    fireEvent.click(button);
    expect(screen.queryByText('What languages have I worked with?')).not.toBeInTheDocument();

    // Open again
    fireEvent.click(button);
    expect(screen.getByText('What languages have I worked with?')).toBeInTheDocument();

    // Close again
    fireEvent.click(button);
    expect(screen.queryByText('What languages have I worked with?')).not.toBeInTheDocument();
  });
});

